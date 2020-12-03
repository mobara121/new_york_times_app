import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './Home';
import News from './News';
import {makeStyles, createStyles} from '@material-ui/core';

const useStyles = makeStyles(()=>
  createStyles({
    nav:{
        position: 'fixed',
        top: '0',
      maxHeight: '100vh',
      width: '100%',
      display: 'flex',
      backgroundColor: '#000'
    },
    ul:{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        fontFamily:'Helvetica Neue'
    },
    li:{
        margin: 'auto 2vw',              
    },
    link:{
        textDecoration: 'none',
        color: 'white' 
    },
    route: {
        marginTop: '10vh',

    }
  })
)

const Sidebar = () => {

    const classes = useStyles();
    return(
        <div>
            <div className={classes.nav}>
                <ul className={classes.ul}>
                    <li className={classes.li}><Link className={classes.link} to='/home'>Home</Link></li>
                    <li className={classes.li}><Link className={classes.link} to='/news'>News</Link></li>
                </ul>
            </div>
            <div>
                <Switch>
                    <Route exact path='/home'><Home className={classes.route} title="The New York Times"/></Route>
                    <Route exact path='/news'><News title="The New York Times"/></Route>
                    <Route exact path='/'><Home/></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar;