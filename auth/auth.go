package auth

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"kylejohnson-xyz/ent"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"

	"golang.org/x/crypto/bcrypt"
)

var SECRET_KEY = []byte("gosecretkey")

type User struct {
	Name     string `json:"name" bson:"name"`
	UserName string `json:"username" bson:"username"`
	Email    string `json:"email" bson:"email"`
	Password string `json:"password" bson:"password"`
}

func getHash(pwd []byte) string {
	hash, err := bcrypt.GenerateFromPassword(pwd, bcrypt.MinCost)
	if err != nil {
		log.Println(err)
	}
	return string(hash)
}

func GenerateJWT() (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)
	tokenString, err := token.SignedString(SECRET_KEY)
	if err != nil {
		log.Println("Error in JWT token generation")
		return "", err
	}
	return tokenString, nil
}

func SetupUserSignup(r *gin.RouterGroup, ctx context.Context, client *ent.Client) {
	ROUTE := "/users"

	r.POST(ROUTE, func(c *gin.Context) {
		var user User
		err := json.NewDecoder(c.Request.Body).Decode(&user)
		if err != nil {
			c.AbortWithError(http.StatusNotAcceptable, err)
			return
		}
		user.Password = getHash([]byte(user.Password))

		result, err := client.User.Create().
			SetEmail(user.Email).
			SetName(user.Name).
			SetUsername(user.UserName).
			SetPasswordHash(user.Password).
			Save(ctx)
		fmt.Println(result)
		if err != nil {
			c.AbortWithError(http.StatusBadRequest, err)
			return
		}

		c.JSON(http.StatusOK, gin.H{"user": result})
	})
}

// func userLogin(response http.ResponseWriter, request *http.Request) {
// 	response.Header().Set("Content-Type", "application/json")
// 	var user User
// 	var dbUser User
// 	json.NewDecoder(request.Body).Decode(&user)
// 	collection := client.Database("GODB").Collection("user")
// 	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
// 	err := collection.FindOne(ctx, bson.M{"email": user.Email}).Decode(&dbUser)
// 	if err != nil {
// 		response.WriteHeader(http.StatusInternalServerError)
// 		response.Write([]byte(`{"message":"` + err.Error() + `"}`))
// 		return
// 	}
// 	userPass := []byte(user.Password)
// 	dbPass := []byte(dbUser.Password)

// 	passErr := bcrypt.CompareHashAndPassword(dbPass, userPass)

// 	if passErr != nil {
// 		log.Println(passErr)
// 		response.Write([]byte(`{"response":"Wrong Password!"}`))
// 		return
// 	}
// 	jwtToken, err := GenerateJWT()
// 	if err != nil {
// 		response.WriteHeader(http.StatusInternalServerError)
// 		response.Write([]byte(`{"message":"` + err.Error() + `"}`))
// 		return
// 	}
// 	response.Write([]byte(`{"token":"` + jwtToken + `"}`))
// }
