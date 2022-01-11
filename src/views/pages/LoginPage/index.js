import React from 'react';

// material-ui
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// project imports

//==============================|| SAMPLE PAGE ||==============================//

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh"
  }
}));
const LoginPage = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Typography variant="h1">
          Login Page
      </Typography>
    </Grid>
  );
};

export default LoginPage;
