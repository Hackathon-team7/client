import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


export const mainListItems = (
  <div>
    <Link to="/schedule">
    <ListItem button>
    <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="לוח זמנים" />
    </ListItem>
      </Link>
    <Link to="/messages">
        <ListItem button>
        <ListItemIcon>
            <NotificationsIcon />
        </ListItemIcon>
        <ListItemText primary="שלח הודעה" />
        </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>

  </div>
);