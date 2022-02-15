import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Anthony sistilli
        </Typography>
        <AllInclusiveIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;