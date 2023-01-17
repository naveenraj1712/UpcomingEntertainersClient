import { Box, Button, Typography } from "@material-ui/core";
import UPLogo from "../assets/logoorangeblack3.svg";
import "./Header.scss";

const Header = () => {
  return (
    <Box className="header-root">
      <div className="logo-root">
        <img src={UPLogo} alt="Upcoming Entertainers" className="logo-image" />
      </div>
      <Typography component="h1" className="header-title">
        Upcoming Entertainers
      </Typography>
      <Button variant="text" className="header-button-1">
        Login
      </Button>
      <Button variant="text" className="header-button-2">
        Signup
      </Button>
    </Box>
  );
};

export default Header;
