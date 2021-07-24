import React from 'react';
import {
    Timeline
} from '@material-ui/lab'
import {TimelineEven, TimelineOdd} from "../index";
import styles from "../PagesSections/Details/Details.module.css";
import useMediaQuery, {Device} from "../../hooks/useMediaQuery";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles( theme => ({
    timeline: {
        padding: '0.5rem 11rem'
    },
    [theme.breakpoints.down("md")]: {
        timeline: {
            padding: '0.5rem 0'
        },
    }
}))

const TimelineSection = (props) => {
    const {titleSection, list} = props;
    const isMobile = useMediaQuery(Device.sm);
    const classes = useStyles();

    return (
        <>
            <div className={styles.container}>
                {isMobile ? <h3 className={styles.title}>
                    {titleSection}
                </h3> : <h1 className={styles.title}>
                    {titleSection}
                </h1>}
                {!isMobile ? <Timeline className={classes.timeline} align="alternate">
                    {list.filter((x, i) => i < list.length-1).map((x, i) => {
                        if(i % 2 === 0){
                            return <TimelineEven title={x.title} period={x.period} place={x.place} link={x.external} last={false}/>
                        } else {
                            return <TimelineOdd title={x.title} period={x.period} place={x.place} link={x.external} last={false}/>
                        }
                    })}
                    {(list.length-1) % 2 === 0 ?
                        <TimelineEven title={list[list.length-1].title} period={list[list.length-1].period} place={list[list.length-1].place} link={list[list.length-1].external} last={true}/>
                    :
                        <TimelineOdd title={list[list.length-1].title} period={list[list.length-1].period} place={list[list.length-1].place} link={list[list.length-1].external} last={true}/>
                    }
                </Timeline> :
                    <Timeline className={classes.timeline}>
                    {list.map((x) => {
                            return <TimelineEven title={x.title} period={x.period} place={x.place} link={x.external} last={false}/>
                    })}{
                            <TimelineEven title={list[list.length-1].title} period={list[list.length-1].period} place={list[list.length-1].place} link={list[list.length-1].external} last={true}/>
                           }
                </Timeline> }
            </div>
        </>
    );
}

export default TimelineSection;