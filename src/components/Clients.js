import React from "react";
import "./Clients.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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

// TODO: Animations and top divider img

const Clients = () => {
  const classes = useStyles();

  return (
    <div className="clients__container">
      <div className="clients__divider"></div>
      <div className="clients__headersContainer">
        <div className="clients__headers">
          <div className="clients__header1">
            <h2>
              Discover how we can accelerate your organizational success through
              innovative and efficient services
            </h2>
          </div>
          <div className="clients__header2">
            <h2></h2>
            <h2></h2>
            <h2></h2>
            <h2></h2>
            <h2></h2>
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
                  src={require("../assets/img/startups.jpg")}
                  alt=""
                  className="clients__cardImage"
                />
                <h2 className="clients__cardTitle">Start-Ups & Small Firms</h2>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper className={classes.paper} elevation={6}>
                <img
                  src={require("../assets/img/firms.jpg")}
                  alt=""
                  className="clients__cardImage"
                />
                <h2 className="clients__cardTitle">Medium & Large Firms</h2>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper className={classes.paper} elevation={6}>
                <img
                  src={require("../assets/img/academic.jpg")}
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
                  src={require("../assets/img/govt.jpg")}
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
