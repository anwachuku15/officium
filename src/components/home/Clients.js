import React from "react";
import "./Clients.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// TODO: ANIMATIONS

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 5,
    textAlign: "center",
    color: "white",
  },
}));

const Clients = () => {
  const classes = useStyles();

  return (
    <div className="clients__container">
      {/* <div className="clients__divider"> */}
      <svg
        width="100%"
        height="100px"
        viewBox="0 0 1280 140"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#ffffff">
          <path d="M640 140L1280 0H0z" fill-opacity=".5" />
          <path d="M640 98l640-98H0z" />
        </g>
      </svg>
      {/* </div> */}
      <div className="clients__headersContainer">
        <div className="clients__headers">
          <div className="clients__header1">
            <h2>
              Discover how we can accelerate your organizational success through
              innovative and efficient services
            </h2>
          </div>
          <div className="clients__header2">
            <h2> </h2>
            <h2> </h2>
            <h2> </h2>
            <h2> </h2>
            <h2> </h2>
            <h2>Our Clients</h2>
          </div>
        </div>
      </div>

      <div className="clients__gridContainer">
        <div className={classes.root}>
          <Grid container spacing={6}>
            <Grid item xs={6} md={3}>
              <Paper className={classes.paper} elevation={6}>
                <img
                  src={require("../../assets/img/home/startups.jpg")}
                  alt=""
                  className="clients__cardImage"
                />
                <h2 className="clients__cardTitle">Start-Ups & Small Firms</h2>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper className={classes.paper} elevation={6}>
                <img
                  src={require("../../assets/img/home/firms.jpg")}
                  alt=""
                  className="clients__cardImage"
                />
                <h2 className="clients__cardTitle">Medium & Large Firms</h2>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper className={classes.paper} elevation={6}>
                <img
                  src={require("../../assets/img/home/academic.jpg")}
                  alt=""
                  className="clients__cardImage"
                />
                <h2 className="clients__cardTitle">
                  Academic, Nonprofit & Foundations
                </h2>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper className={classes.paper} elevation={6}>
                <img
                  src={require("../../assets/img/home/govt.jpg")}
                  alt=""
                  className="clients__cardImage"
                />
                <h2 className="clients__cardTitle">Government Agencies</h2>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Clients;
