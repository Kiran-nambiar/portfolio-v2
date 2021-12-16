import React from 'react';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  sidebarLinks: {
    color: '#919191',
    '&:hover': {
      textDecoration: 'none',
      color: '#494949',
    }
  }
});

export default function SideDrawer({ state, setState }) {
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <>
      <div
        role="presentation"
        className={clsx(classes.list)}
      >
        <List className="mt-5">
          {React.Children.toArray(SIDEBAR_LINKS.map(({ title, handle, icon }) => (
            <Link onClick={() => setState(!state)} className={classes.sidebarLinks} to={`/widgets/${handle}`}>
              <ListItem button key={title}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          )))}
        </List>
      </div>
    </>
  );

  return (
    <div>
      <Drawer transitionDuration={{ enter: 200, exit: 0 }} open={state} onClose={toggleDrawer(false)}>
        {list()}
        <a href="https://www.buymeacoffee.com/knambiar" rel="noopener noreferrer" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" className="bmc-btn" alt="Buy Me A Coffee" /></a>
      </Drawer>
    </div>
  );
}


const SIDEBAR_LINKS = [
  { title: "Weather App", handle: "weather-app", icon: <CloudIcon /> },
  { title: "Mars Rover", handle: "mars-rover-images", icon: <img width={24} height={24} src="https://img.icons8.com/wired/64/000000/space-ship.png" alt="space icon" /> },
  { title: "Dev News", handle: "news", icon: <CodeIcon /> },
  { title: "Jokes", handle: "jokes", icon: <SentimentVerySatisfiedIcon /> },
]