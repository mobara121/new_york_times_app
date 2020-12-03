import {makeStyles, createStyles} from '@material-ui/core';
import React, {useState} from 'react';
import NewsResult from './NewsResult';

const useStyles = makeStyles(()=>
    createStyles({
        form:{
            display:'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            fontFamily: 'Helvetica Neue'
        },
        input:{
            margin:'0 1vw'
        },
        p:{
            margin: '2px',
            textAlign:'left',
            fontWeight: '700'
        },
        keyword:{
            minWidth: '300px',
            height: '30px'
        },
        date:{
            height:'30px'
        },
        btn:{
            backgroundColor: 'red',
            padding: '5px 10px ',
            border: '2px red',
            borderRadius: '5px',
            margin: '20px',
            color: '#fff',
            fontWeight: '700',
            height: '40px',
            '&:hover':{
                backgroundColor:'#e42121'
            }
        }
    })
)

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';//2//
const key = '0ctIacWcI3crQr1GOMDEs8vC0Jll5HV6';//2//

const News=(props)=>{
    const [query, setQuery] = useState('');//1//
    const [results, setResults] = useState([]);//1//

    const [startDate, setStartDate] = useState(''); //Date1//
    const [endDate, setEndDate] = useState('');//Date1//
    
    const [pageNumber, setPageNumber] = useState(0);//Page1//

    const classes =useStyles();

    //3//
    const fetcher = () =>{
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${query}`
        url = startDate ? url + `&begin_date=${startDate}` : url; //Date2//
        url = endDate ? url + ` &end_date=${endDate}` : url; //Date2//
        
        fetch(url)
        .then(res=>res.json())
        .then(results => {
            console.log(results);
            setResults(results.response.docs);//console.logの結果で、さらにresponsとdocsまで深堀
        })
        .catch(err => console.log(err))
    }

    // 4-2, Page5
    const handleSubmit = (event) => {
        event.preventDefault();
        fetcher();
        setPageNumber(0);
    }

    // Page2
    const changePageNumber = (event, direction) => {
        event.preventDefault()
        if(direction === 'down'){
            if(pageNumber > 0){
                setPageNumber(pageNumber -1);
                fetcher();
            }
        }
        if(direction === 'up'){
            setPageNumber(pageNumber +1);
            fetcher();
        }
    }

    return(
        <div>
            <div className={classes.form}>
                <div className={classes.input}>
                    <p className={classes.p}>Keyword</p>
                {/* 4-1 */}            
                    <input className={classes.keyword} type="text" value={query} onChange={e => setQuery(e.target.value)} required/>
                </div>
                <div className={classes.input}>
                    <p className={classes.p}>Start Date</p>
            {/* Date3 */}
                    <input type="date" name="startDate" pattern="[0-9]{8}" onChange={e=>setStartDate(e.target.value)} className={classes.date}></input>
                </div>
                <div className={classes.input}>
                    <p className={classes.p}>End Date</p>
                    <input type="date" name="endDate" pattern="[0-9]{8}" onChange={e=>setEndDate(e.target.value)} className={classes.date}></input>
              </div>
            </div>
            {/* 4-2 */}
              <button className={classes.btn} onClick={(e)=> handleSubmit(e)}>Submit for search</button>              
            <div>
                {/* 5*/ }                                          {/*page3 */}
                {results.length > 0 ? <NewsResult results={results} changePage={changePageNumber}/> : null}
            </div>
        </div>
    )
}

export default News;