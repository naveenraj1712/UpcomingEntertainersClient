import { Box, Button, FormControl, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import "./LoginPage.scss";

const LoginPage = () => {
  const [userCredentials, setUserCredentials] = useState({
    userName: "",
    password: "",
  });
  const onChangeInput = (e) => {
    console.log(e.target);
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };
  return (
    <Box className="login-page">
      <Box className="login-page-root-img" />
      <Box className="login-page-root">
        <FormControl variant="standard" className="login-form-root">
        <Typography className="login-page-header" component="h2">Login Page</Typography>
          <TextField
            InputLabelProps={{className: `login-form-user-label ${userCredentials.userName ? "" : "login-form-input-pad"}`}}
            inputProps={{className: "login-form-user-input"}}
            value={userCredentials.userName}
            label="User Name"
            name="userName"
            onChange={onChangeInput}
            className="login-form-user"
          />
          <TextField
            InputLabelProps={{className: `login-form-user-label ${userCredentials.password ? "" : "login-form-input-pad"}`}}
            inputProps={{className: "login-form-user-input"}}
            value={userCredentials.password}
            label="Password"
            name="password"
            onChange={onChangeInput}
            className="login-form-user"
            type="password"
          />
          <Button
            variant="submit"
            onClick={() => {
              console.log("Logged In");
            }}
            className="login-form-submit"
          >
            Login
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LoginPage;
