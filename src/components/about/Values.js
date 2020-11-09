/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import "./Values.css";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: "80%",
    maxWidth: 1080,
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 47,
  },
}));
const Values = () => {
  const classes = useStyles();

  return (
    <div className="values__container">
      <div className="values__headerContainer">
        <div className="values__headerDiv">
          <div className="values__header">
            <div className="values__headerText">
              <h2>Our Values</h2>
            </div>
          </div>
        </div>
        <div className="values__divider">
          <div className="values__dividerInternal"></div>
        </div>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={4}>
            <div className="values__gridColumn">
              <h2>Excellence</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip.
              </p>
              <h2></h2>
              <h2></h2>
              <h2></h2>
              <h2>Quality</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Massa massa ultricies mi quis hendrerit dolor magna.
                Pellentesque dignissim enim sit amet venenatis urna cursus.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <div className="values__gridColumn">
              <h2>Integrity and Ethics</h2>
              <p>
                Pellentesque eu tincidunt tortor aliquam nulla. Dictum at tempor
                commodo ullamcorper a. Ultrices gravida dictum fusce ut placerat
                orci. Posuere ac ut consequat semper viverra nam libeo.
              </p>
              <h2></h2>
              <h2></h2>
              <h2></h2>
              <h2>Teamwork</h2>
              <p>
                Dolor sit amet consectetur adipiscing elit. Euismod nisi porta
                lorem mollis aliquam ut porttitor leo. Vitae sapien pellentesque
                habitant morbi tristique. Dignissim suspendisse in est ante in
                nibh mauris cursus mattis.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <div className="values__gridColumn">
              <h2>Honest Communication</h2>
              <p>
                Nec sagittis aliquam malesuada bibendum arcu vitae elementum.
                Tincidunt praesent semper feugiat nibh sed pulvinar proin
                gravida. Nec sagittis aliquam malesuada bibendum arcu vitae
                elementum.
              </p>
              <h2></h2>
              <h2></h2>
              <h2></h2>
              <h2>Ownership and Initiative</h2>
              <p>
                Elit eget gravida cum sociis natoque. Iaculis at erat
                pellentesque adipiscing commodo. Eu turpis egestas pretium
                aenean pharetra. Iaculis eu non diam phasellus vestibulum lorem
                sed. Gravida arcu ac tortor dignissim convallis aenean et
                tortor.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Values;
