import React from "react";
import "./Description1.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosRounded from "@material-ui/icons/ArrowForwardIosRounded";
// import Puzzle from "@material-ui/icons/ExtensionOutlined";
import { HiOutlinePuzzle } from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";
import { FaPencilRuler } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 30,
    textAlign: "center",
    color: "white",
  },
  gridItem: {},
  gridItemLast: {},
}));

const Description = () => {
  const classes = useStyles();

  return (
    <div className="description1__container">
      <div className="description1__header">
        <h1>We make clinical trials more successful</h1>
        <p>&nbsp;</p>
      </div>
      <div className="description1__gridContainer">
        <div className="description1__gridHeader">
          <h1>Services</h1>
        </div>
        <div className="muiGrid__container">
          <div className={classes.root}>
            <Grid container spacing={6}>
              <Grid
                item
                xs={12}
                md={4}
                //   style={{ marginRight: "5.5%" }}
              >
                <Paper className={classes.paper} elevation={6}>
                  <div className="paperContent">
                    <div className="gridItem__icon">
                      <FaPencilRuler fontSize={100} />
                    </div>
                    <div className="gridItem__title">
                      <h4>Clinical Development</h4>
                    </div>
                    <div className="gridItem__body">
                      <p>
                        Start-ups, medium size enterprises and global
                        corporation have unique clinical research needs.
                        Whatever your need, we fit our solutions to match your
                        requirements
                      </p>
                    </div>
                  </div>
                </Paper>

                <div className="buttonWrapper1 readMore">
                  <Link to="/services" className="grid__buttonLink">
                    <span>Read More</span>
                  </Link>
                  <div className="grid__forwardLink">
                    <ArrowForwardIosRounded fontSize="small" />
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                //   style={{ marginRight: "5.5%" }}
              >
                <Paper className={classes.paper} elevation={6}>
                  <div className="paperContent">
                    <div className="gridItem__icon">
                      <HiOutlinePuzzle fontSize={100} />
                    </div>
                    <div className="gridItem__title">
                      <h4>Custom Solutions</h4>
                    </div>
                    <div className="gridItem__body">
                      <p>
                        Our objective is getting you to your goal. No matter
                        your industry, our challenge-driven team will work to
                        identify solutions and develop custom services and
                        products that suits your company
                      </p>
                    </div>
                  </div>
                </Paper>
                <div className="buttonWrapper1 readMore">
                  <Link to="/services" className="grid__buttonLink">
                    <span>Read More</span>
                  </Link>
                  <div className="grid__forwardLink">
                    <ArrowForwardIosRounded fontSize="small" />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper} elevation={6}>
                  <div className="paperContent">
                    <div className="gridItem__icon">
                      <BsPeopleFill fontSize={100} />
                    </div>
                    <div className="gridItem__title">
                      <h4>Consulting</h4>
                    </div>
                    <div className="gridItem__body">
                      <p>
                        We offer consulting services comprising of industry
                        experts to help you solve your organization’s
                        challenges. In today’s ever-increasing globalization,
                        stay ahead of the market by keeping an eye on the future
                      </p>
                    </div>
                  </div>
                </Paper>
                <div className="buttonWrapper1 readMore">
                  <Link to="/services" className="grid__buttonLink">
                    <span>Read More</span>
                  </Link>
                  <div className="grid__forwardLink">
                    <ArrowForwardIosRounded fontSize="small" />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
