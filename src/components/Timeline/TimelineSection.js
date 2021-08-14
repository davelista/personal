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
    const isTablet = useMediaQuery(Device.lg);
    const classes = useStyles();

    return (
        <>
            <div className={styles.container} id={titleSection === 'Esperienze' ? 'experiences' : 'education'}>
                {isMobile ? <h3 className={styles.title}>
                    {titleSection}
                </h3> : <h1 className={styles.title}>
                    {titleSection}
                </h1>}
                {!isTablet ? <Timeline className={classes.timeline} align="alternate">
                    {list.filter((x, i) => i < list.length-1).map((x, i) => {
                        if(i % 2 === 0){
                            return <TimelineEven title={x.title} period={x.period} place={x.place} link={x.external} last={false} img={x.img}/>
                        } else {
                            return <TimelineOdd title={x.title} period={x.period} place={x.place} link={x.external} last={false} img={x.img}/>
                        }
                    })}
                    {(list.length-1) % 2 === 0 ?
                        <TimelineEven title={list[list.length-1].title} period={list[list.length-1].period} place={list[list.length-1].place} link={list[list.length-1].external} last={true} img={list[list.length-1].img}/>
                    :
                        <TimelineOdd title={list[list.length-1].title} period={list[list.length-1].period} place={list[list.length-1].place} link={list[list.length-1].external} last={true} img={list[list.length-1].img}/>
                    }
                </Timeline> :
                    <Timeline className={classes.timeline}>
                    {list.map((x) => {
                            return <TimelineEven title={x.title} period={x.period} place={x.place} link={x.external} last={false} img={x.img}/>
                    })}{
                            <TimelineEven title={list[list.length-1].title} period={list[list.length-1].period} place={list[list.length-1].place} link={list[list.length-1].external} last={true} img={list[list.length-1].img}/>
                           }
                </Timeline> }
            </div>
        </>
    );
}

export default TimelineSection;