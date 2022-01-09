import React from "react";

// material-ui
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import Background from "../../assets/images/Background";

// project imports

//==============================|| SAMPLE PAGE ||==============================//

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
    fontFamily: "'Inter', sans-serif",
  },
  largeText: {
    color: "#F4F5FC",
    fontFamily: "'Inter', sans-serif",
    // fontWeight:700,
    fontSize: "3em",
  },
  mediumText: {
    fontSize: "2.5em",
    fontFamily: "'Inter', sans-serif",
    // fontWeight:600,
    margin: "30px 0",
    color: "#F4F5FC",
  },
  emailButton:{
    borderRadius:'30px',
    width:'30%',
    position:'absolute',
    right:0,
    top:0,
    padding:0,
    backgroundColor:'#F1E4FF',
    height:'100%',
    color:'rgba(87, 62, 208, 1)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  },
  inputContainer:{
    borderRadius:'30px',
    width:'400px',
    padding:0,
    position:'relative',
    backgroundColor:'rgba(244, 245, 252, 0.95)'
  },
  input:{
    width:'70%',
    boxSizing:'border-box',
    padding:'0 10px' 
  }
}));
const SamplePage = () => {
  const classes = useStyles();
  return (
    <>
      <Background />
      <Grid container className={classes.root} alignItems="center">
        <Grid item sm={5} p={5}>
          <Typography variant="h1" className={classes.largeText}>
            <b>Reasearch</b> means, you don't know but are willing to find out...
          </Typography>
          <Typography variant="h2" className={classes.mediumText}>
            We just made it easy for you...
          </Typography>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
            className = {classes.inputContainer}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter Your email"
              inputProps={{ "aria-label": "Enter Your email" }}
              className= {classes.input}
            />
            <Button variant="contained" className={classes.emailButton}>GET STARTED</Button>
          </Paper>
        </Grid>
        <Grid item sm={7}></Grid>
      </Grid>
    </>
  );
};

export default SamplePage;
