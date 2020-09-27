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
                Our relentless pursuit of excellence is evident in our services.
                This means our clients receive superior deliverable that meets
                or surpasses their expectations
              </p>
              <h2></h2>
              <h2></h2>
              <h2></h2>
              <h2>Quality</h2>
              <p>
                Our commitment to consistent quality products and services is
                seen through our focus on quality control and quality planning.
                Our clients can expect continous innovation in our methods of
                delivering quality service to them
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <div className="values__gridColumn">
              <h2>Integrity and Ethics</h2>
              <p>
                Doing the right thing by our clients and society at-large is
                central to our corporate responsibility. Our clients can the
                highest ethical standard and their confidential information to
                be maintained
              </p>
              <h2></h2>
              <h2></h2>
              <h2></h2>
              <h2>Teamwork</h2>
              <p>
                Teamwork is essential to achieving the goals both internally and
                with our clients. For our clients, this translates to on-time
                delivery and increased efficiencies for their products and
                services
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <div className="values__gridColumn">
              <h2>Honest Communication</h2>
              <p>
                Our golden standard of communication with our clients’ centers
                around the principle of open-ended questions; discussing
                problems; and critically sharing ideas that help them succeed
              </p>
              <h2></h2>
              <h2></h2>
              <h2></h2>
              <h2>Ownership and Initiative</h2>
              <p>
                Leadership values and skills are built from the ground-up
                throughout our organization. Our clients can expect that project
                priorities are aligned to maximize their firm’s vision and
                success
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Values;
