import React, {useState} from 'react';
import {makeStyles, createStyles, AccordionSummary} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(()=>
    createStyles({
        results:{
            padding: '0 5vw',
            width:'90%',
        },
        '@global':{'.MuiButtonBase-root:hover':{
            backgroundColor: 'rgba(0,0,0,0.1)'
        }},                 
        main:{
            fontSize: '1.2rem',
            fontFamily:'Helvetica Neue',
            fontWeight: '800',
            
        },
        image:{
            width: '80vw'
        },
        btn:{
            backgroundColor: 'red',
            padding: '5px 10px ',
            border: '2px red',
            borderRadius: '5px',
            margin: '20px',
            color: '#fff',  
            '&:hover':{
                backgroundColor: '#e42121'
        },         
        },
        
        snippet:{
            textAlign: 'left',
            fontFamily:'Helvetica Neue',
        }
    })
)

const NewsResult=(props)=>{
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = e =>{
        setOpen(!open)
    }

    return(
        <div className={classes.results}>            
            {/* 6 */}
            {props.results.map(result => {
                return(
                    // 1//
                    <Accordion key={result._id}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            onClick={handleClick}
                        >
                            <p className={classes.main}>{result.headline.main}</p>
                        </AccordionSummary>
                        <AccordionDetails>
                        {open? 
                            <div>
                                {/* 2 */}
                                {result.multimedia.length>1? <img className={classes.image} alt='article' src={`http://www.nytimes.com/${result.multimedia[1].url}`}/> : ''}
                                <p className={classes.snippet}>{result.snippet}
                                <br/>
                                {/* {result.keywords.length >0 ? 'Keywords: ' : ''} */}
                                </p>
                                {/* 3 */}
                                {/* <ul>
                                    {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
                                </ul> */}
                                <a href={result.web_url}><button>Read It</button></a>
                            </div>
                        : <div></div>}</AccordionDetails>
                    </Accordion>
                )
            })}
            {/* Page4 */}
            <div>
                <button className={classes.btn} onClick={(e)=>props.changePage(e, 'down')}>≪ Previous 10</button>
                <button className={classes.btn}  onClick={(e)=>props.changePage(e, 'up')}>Next 10 ≫</button>
            </div>
        </div>
    )
}

export default NewsResult;