import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  section: {
    padding: theme.spacing.unit * 2,
    display: "flex",
    justifyContent: "space-between",
    width: 600
  }
});

export default withStyles(styles)(function Section({ classes, children }) {
  return <section className={classes.section}>{children}</section>;
});
