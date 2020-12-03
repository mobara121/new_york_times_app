import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router} from 'react-router-dom';
import {makeStyles, createStyles} from '@material-ui/core';

const useStyles = makeStyles(()=>
  createStyles({
    header:{
      // minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'right',
      // justifyContent: 'center',
      marginTop: '15vh'
    },
    title:{
      fontFamily: 'Pirata One, cursive',
      fontSize: '5rem',
      fontWeight: '900'
  }
  })
)

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className={classes.header}>
        <p className={classes.title}>The New York Times</p>
      </header>
        <Router>
          <Sidebar/>
        </Router>
         
      
    </div>
  );
}

export default App;
