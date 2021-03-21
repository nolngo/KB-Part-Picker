import React from 'react'
import { AppBar, Toolbar, IconButton, MenuItem, Menu, Typography, Badge } from '@material-ui/core';
import { BuildRounded } from '@material-ui/icons'

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position = "fixed" className = {classes.AppBar} color = "inherit">
        <Toolbar>
          <Typography variant="h6" className = {classes.title}>
            <img src = './keyboard.svg' alt = "KBPARTPICKER" height = "25px" className = {classes.image} />
            KBPARTPICKER
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="View Build Parts" color="inherit">
              <Badge badgeContent={3} color="secondary">
                <BuildRounded />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

    </>
  )
}

export default Navbar
