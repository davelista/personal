import React from 'react';
import {TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@material-ui/lab";
import {makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles( theme => ({
    dot: {
        content: '',
        background: '#8490ff',
        width: '5px',
        height: '5px',
        border: '5px solid #eee',
        borderRadius: '50%',
        boxShadow:'none'
    },
    paper: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor: 'white !important',
        boxShadow: '0 10px 27px 3px rgba(204, 204, 204, 0.2)',
        position: 'relative',
        transform: 'translateY(-45%)',
        padding: '2rem',
        fontWeight: '300',
        width: '20rem',
        height: '7rem'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        textAlign: 'center !important'
    },

    a:{
        color: "#f59e24",
        '&:hover': {
            color: "#0b4e6c",
        }
    }
}));

const TimelineOdd = (props) => {
    const classes = useStyles();
    const {title, period, place, link, last, img} = props;




    return (
        <>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot className={classes.dot} />
                    {!last ? <TimelineConnector /> : <></>}
                    </TimelineSeparator>
                <TimelineContent className={classes.content}>


                    <Paper elevation={3} className={classes.paper}>
                        {img !== "" ? <img src={require('../../img/logo/' + img).default} style={{height: "2rem", marginBottom: "1rem"}} alt={img}/> : <div/>}
                        <h4 style={{textAlign: "center"}}>{title}</h4>
                        <div><b>Periodo:</b> {period}</div>
                        <a href={link} ><div className={classes.a}>{place}</div></a>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </>
    );
}

export default TimelineOdd;