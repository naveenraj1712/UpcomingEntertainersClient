import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import "./LoginPage.scss";

const LoginPage = () => {
  const [userCredentials, setUserCredentials] = useState({
    userName: "",
    password: "",
  });
  const [marginVal, setMarginVal] = useState("10");
  const onChangeInput = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setMarginVal("10");
  }, [userCredentials]);

  const updateMargin = () => {
    if (window.innerWidth <= 1356) return;
    if (!userCredentials.userName || !userCredentials.password) {
      if (marginVal === "10") {
        setMarginVal("500");
      } else if (marginVal === "500") {
        setMarginVal("-500");
      } else setMarginVal("10");
    } else {
      setMarginVal("10");
    }
  };

  return (
    <Box className="login-page">
      <Box className="login-page-root-img" />
      <Box className="login-page-root">
        <FormControl variant="standard" className="login-form-root">
          <Typography className="login-page-header" component="h2">
            Login Page
          </Typography>
          <TextField
            InputLabelProps={{
              className: `login-form-user-label ${
                userCredentials.userName ? "" : "login-form-input-pad"
              }`,
            }}
            inputProps={{ className: "login-form-user-input" }}
            value={userCredentials.userName}
            label="User Name"
            name="userName"
            onChange={onChangeInput}
            className="login-form-user"
          />
          <TextField
            InputLabelProps={{
              className: `login-form-user-label ${
                userCredentials.password ? "" : "login-form-input-pad"
              }`,
            }}
            inputProps={{ className: "login-form-user-input" }}
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
              alert("Logged In");
            }}
            className="login-form-submit"
            style={{ marginLeft: `${marginVal}px` }}
            onMouseOver={() => {
              updateMargin();
            }}
          >
            Login
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LoginPage;
