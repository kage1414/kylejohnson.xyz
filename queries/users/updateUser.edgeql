update User
filter .username = <str>$username
set {
  username := <optional str>$username,
  hash := <optional str>$hash,
  salt := <optional str>$salt,
  name := <optional str>$name
}