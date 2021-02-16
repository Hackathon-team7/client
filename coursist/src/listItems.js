import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AllInBoxIcon from '@material-ui/icons/AllInbox';

import {Link} from "react-router-dom"


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
    <Link to="/addForm">
        <ListItem button>
        <ListItemIcon>
            <AllInBoxIcon />
        </ListItemIcon>
        <ListItemText primary="הוספת מסמך" />
        </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
<Link to="/management">
        <ListItem button>
        <ListItemIcon>
            <NotificationsIcon />
        </ListItemIcon>
        <ListItemText primary="מסך ניהול" />
        </ListItem>
    </Link>
  </div>
);