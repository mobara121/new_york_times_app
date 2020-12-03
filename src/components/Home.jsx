import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core';
import {Link, Route, Switch } from 'react-router-dom';
import NewsResult from './NewsResult';

const useStyles = makeStyles(()=>
    createStyles({
        home:{
            display: 'flex',
            flexDirection: 'column',
            margin: '10vh auto'
        },
        text:{
            fontFamily: 'Helvetica Neue',
            fontSize: '1.2rem',            
        },
        btn:{
            backgroundColor: 'red',
            padding: '10px',
            border: '2px red',
            borderRadius: '5px'
        },
        link: {
            fontFamily: 'Helvetica Neue',
            textDecoration: 'none',
            fontSize: '1.2rem',
            color: '#fff'
        }
    })
)

const Home=(props)=>{
    const classes =useStyles();
    return(
        <div className={classes.home}>
            <p className={classes.text}>Search the latest article from 'The New York Times'.</p>
            <div>
            <button className={classes.btn}><Link className={classes.link} to='/news'>Search News >></Link></button>
            </div>
            <div>
                <Switch>
                    <Route exact path="/news"><NewsResult/></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Home;