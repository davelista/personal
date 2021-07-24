import React, {useState} from 'react';
import styles from './ProgressBar.module.css';
import {LinearProgress, makeStyles, withStyles} from "@material-ui/core";

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: '8px',
        borderRadius: '12px',
        border: '3px solid #eee',

    },
    [theme.breakpoints.down("md")]: {
        root: {
            height: '8px',
            borderRadius: '12px',
            border: '3px solid #eee'
    }},
    colorPrimary: {
        backgroundColor: 'rgb(221, 221, 221)',
    },
    bar: {
        position: 'absolute',
        borderRadius: '12px',
        backgroundColor: 'rgb(51, 122, 183)',
    },
}))(LinearProgress);

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const ProgressBar = (props) => {
    const [progressValue, setProgressValue] = useState(0);
    const {value, title} = props;

    if(progressValue < value){
        setTimeout(() => setProgressValue(progressValue+10), 100);
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={styles.container}>
                <div className={styles.title}>{title}</div>
                <BorderLinearProgress variant="determinate" value={progressValue} />
            </div>

        </div>
    );
}

export default ProgressBar;