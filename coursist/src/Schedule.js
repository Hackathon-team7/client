import React from 'react';
import clsx from 'clsx';
import { withStyles  } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Calendar from 'react-calendar';
import InfiniteLoading from 'react-simple-infinite-loading';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
});

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {userPicked: false, items: null, value: new Date()};
  }

  handleDayClick = () => {
    fetch('https://coursist-backend.azurewebsites.net/event')
    .then(res => res.json())
    .then(( results ) => {
      console.log(results)
      this.setState({userPicked : true, hasMore : false, items: results})
    })
  };
  fetchMoreData = () => {
    if (this.state.items.length >= 500) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 500);
  };

  render() {
    const { classes } = this.props;
    var fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
return (
      <div>
<Grid container spacing={3}>
{/* Chart */}
<Grid item xs={12} md={8} lg={9}>
  <Paper className={fixedHeightPaper}>
  <Calendar
onChange={this.onChange}
value={this.state.value}
onClickDay={this.handleDayClick}
/>
  </Paper>
</Grid>
<Grid item xs={12}>
  <Paper className={classes.paper}>
{!this.state.userPicked ? 
<Typography component="h1" direction="rtl" variant="h6" color="inherit" noWrap className={classes.title}>
בחר יום
</Typography> :
 <div style={{ width: 300, height: 300 }}>
 <InfiniteLoading
   hasMoreItems={this.statehasMore}
   itemHeight={40}
   loadMoreItems={this.state.fetchMore}
 >
 {this.state.items.map(item => <div key={item.id}>{item.name +":\n מתחיל ב: " + item.startDate + "נגמר ב: " + item.endDate}</div>)}
 </InfiniteLoading>
</div> }
  </Paper>
</Grid>
</Grid>
<Box pt={4}>
</Box>
</div>
)};
}
export default withStyles(styles, { withTheme: true })(Schedule);
