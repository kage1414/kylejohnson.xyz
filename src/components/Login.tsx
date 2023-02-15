import {
  Box,
  Grid,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
  Container,
  TextField,
  Button,
} from "@mui/material";
import { ReactElement, useState, useEffect } from "react";
import axios from "axios";

export function Login(): ReactElement {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    console.log({ username, password });
  }, [username, password]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minWidth="25vw"
      minHeight="25vh"
    >
      <Grid>
        <Grid>
          <TextField
            id="username-input"
            label="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Grid>
        <Grid>
          <TextField
            id="password-input"
            label="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
        <Grid>
          <Button>Login</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
