import React from "react";
import Logo from '../../../assets/images/Logo.svg';
import {
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Button
} from "@material-ui/core";

import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    // marginLeft: theme.spacing(5),
    display: "flex",
    alignItems:"center"
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  loginButton:{
    marginLeft:theme.spacing(2),
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '20px',
    textAlign: 'center',
    color: '#8C30F5',
    backgroundColor: '#F1E4FF',
    borderRadius: '6px',
    boxShadow:'none'
  },
  signupButton:{
    backgroundColor:'rgba(87, 62, 208, 1)',
    color:'white'
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "12px",
    marginRight: theme.spacing(5),
    "&:hover": {
      color: "purple",
      borderBottom: "1px solid white",
      cursor:'pointer'
    },
  },
}));

//-----------------------|| MAIN NAVBAR / HEADER ||-----------------------//

const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>
          <img src = {Logo} />
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/pricing" className={classes.link}>
              pricing
            </Link>
            <Link to="/conferences" className={classes.link}>
              conferences
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Button variant="contained" href="#contained-buttons" className={classes.loginButton}>
              Login
            </Button>
            <Button variant="contained" href="#contained-buttons" className={[classes.loginButton, classes.signupButton].join(' ')}>
              Signup
            </Button>
          </div>
        )}
            
        </React.Fragment>
    );
};

export default Header;
