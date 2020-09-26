import React, { Fragment } from "react";
import "./OurClients.css";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  clientGrid: {
    flexGrow: 1,
    width: "80%",
    maxWidth: 1080,
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 47,
    marginBottom: 100,
  },
  statsGrid: {
    flexGrow: 1,
    width: "80%",
    maxWidth: 1080,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 29,
    paddingBottom: 140,
  },
}));

const ClientRow = ({ first, second, third }) => (
  <Fragment>
    <Grid item xs={12} md={4} lg={4}>
      <div className="ourClients__gridColumn">
        <h2>{first}</h2>
      </div>
    </Grid>
    <Grid item xs={12} md={4} lg={4}>
      <div className="ourClients__gridColumn">
        <h2>{second}</h2>
      </div>
    </Grid>
    <Grid item xs={12} md={4} lg={4}>
      <div className="ourClients__gridColumn">
        <h2>{third}</h2>
      </div>
    </Grid>
  </Fragment>
);

const StatsRow = ({ numbers, titles }) => (
  <Fragment>
    <Grid item xs={12} md={4} lg={4}>
      <div className="ourClients__gridColumn2">
        <h1>{numbers[0]}</h1>
        <h2>{titles[0]}</h2>
      </div>
    </Grid>
    <Grid item xs={12} md={4} lg={4}>
      <div className="ourClients__gridColumn2">
        <h1>{numbers[1]}</h1>
        <h2>{titles[1]}</h2>
      </div>
    </Grid>
    <Grid item xs={12} md={4} lg={4}>
      <div className="ourClients__gridColumn2">
        <h1>{numbers[2]}</h1>
        <h2>{titles[2]}</h2>
      </div>
    </Grid>
  </Fragment>
);

const OurClients = () => {
  const classes = useStyles();

  return (
    <div className="ourClients__container">
      <div className="ourClients__headerContainer">
        <div className="ourClients__headerDiv">
          <div className="ourClients__header">
            <div className="ourClients__headerText">
              <h2>Our Clients</h2>
            </div>
          </div>
        </div>
        <div className="ourClients__divider">
          <div className="ourClients__dividerInternal"></div>
        </div>
      </div>
      <div className={classes.clientGrid}>
        <Grid container spacing={3}>
          <ClientRow
            first={"Start-Ups & Small Firms"}
            second={"Medium & Large Firms"}
            third={"Government Agencies"}
          />
          <ClientRow
            first={"Academic Institutions"}
            second={"Teaching & Communnity Hospitals"}
            third={"Nonprofit Business & Foundations"}
          />
        </Grid>
      </div>
      <div className={classes.statsGrid}>
        <Grid container spacing={3}>
          <StatsRow
            numbers={[3, 9, 14]}
            titles={[
              "Continents",
              "Investigational Drugs",
              "Years of Experience",
            ]}
          />
          <StatsRow
            numbers={[28, 4, 1]}
            titles={["Projects", "Medical Devices", "Location"]}
          />
        </Grid>
      </div>
    </div>
  );
};

export default OurClients;
