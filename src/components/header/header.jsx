import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Yash Agarwal
        </Typography>
        <Tooltip title="LinkedIn Profile" aria-label="LinkedIn Profile">
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/yash-agarwal-a6a92a133/"
            target="_blank"
            aria-label="linkedin link"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Github Profile" aria-label="Github Profile">
          <IconButton
            color="inherit"
            href="https://github.com/yash0412"
            target="_blank"
            aria-label="github link"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
