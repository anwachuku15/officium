import React, { Fragment } from "react";
import "./OurSectors.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { BiBriefcase } from "react-icons/bi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { MdLibraryBooks } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";
import { HiCurrencyDollar } from "react-icons/hi";
import { AiOutlineLineChart } from "react-icons/ai";

const SectorRow1 = () => (
  <Fragment>
    <Grid item xs={12} md={4} lg={4}>
      <div className="ourSectors__icon">
        <BiBriefcase fontSize={60} />
      </div>
      <p className="ourSectors__iconTitle">Clinical Research</p>
    </Grid>
    <Grid item xs={12} md={4} lg={4}>
      <div className="ourSectors__icon">
        <HiOutlineLockClosed fontSize={60} />
      </div>
      <p className="ourSectors__iconTitle">Custom Solutions </p>
    </Grid>
    <Grid item xs={12} md={4} lg={4}>
      <div className="ourSectors__icon">
        <MdLibraryBooks fontSize={60} />
      </div>
      <p className="ourSectors__iconTitle">Education and Learning</p>
    </Grid>
  </Fragment>
);

const SectorRow2 = () => (
  <Fragment>
    <Grid item xs={12} md={4} lg={4}>
      <div className="ourSectors__icon">
        <BsHouseDoor fontSize={60} />
      </div>
      <p className="ourSectors__iconTitle">Health Equity</p>
    </Grid>
    <Grid item xs={12} md={4} lg={4}>
      <div className="ourSectors__icon">
        <HiCurrencyDollar fontSize={60} />
      </div>
      <p className="ourSectors__iconTitle">Project Management</p>
    </Grid>
    <Grid item xs={12} md={4} lg={4}>
      <div className="ourSectors__icon">
        <AiOutlineLineChart fontSize={60} />
      </div>
      <p className="ourSectors__iconTitle">Public Health Research</p>
    </Grid>
  </Fragment>
);

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
const OurSectors = () => {
  const classes = useStyles();

  return (
    <div className="ourSectors__container">
      <div className="ourSectors__headerContainer">
        <div className="ourSectors__headerDiv">
          <div className="ourSectors__header">
            <div className="ourSectors__headerText">
              <h2>Our Sectors</h2>
            </div>
          </div>
        </div>
        <div className="ourSectors__divider">
          <div className="ourSectors__dividerInternal"></div>
        </div>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <SectorRow1 />
          <SectorRow2 />
        </Grid>
      </div>
    </div>
  );
};

export default OurSectors;
