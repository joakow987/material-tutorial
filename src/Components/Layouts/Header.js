import React from "react";
import {AppBar, Toolbar, Typography} from '@material-ui/core'


export default props => (
  <AppBar position="static">
    <Toolbar>
      {/* <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton> */}
      <Typography variant="body1" color="inherit">
        Material-UI
          </Typography>
    </Toolbar>
  </AppBar>
);
