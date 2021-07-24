import React, {useContext} from 'react';
import {ProgressBar} from "../../index";
import {AppContext} from "../../../context/AppContext";
import styles from "./Details.module.css"
import useMediaQuery, {Device} from "../../../hooks/useMediaQuery";

const Knowledge = (props) => {
    const appData = useContext(AppContext);
    const isMobile = useMediaQuery(Device.sm);
    return (
        <>
            <div className={styles.container}>
                {isMobile ? <h3 className={styles.title}>
                    Conoscenze
                </h3> : <h1 className={styles.title}>
                    Conoscenze
                </h1>}

                    {appData.knowledgesList.map((x, i) => {
                        if(i < appData.knowledgesList.length - 1){
                            return(
                                <>
                                    <h4 className={styles.subTitle}> {x.name}</h4>
                                    <div className={!isMobile ? styles.section : null}>
                                    {x[x.name].map((y) => {
                                        return <div className={styles.progressBar}> <ProgressBar value={y.value} title={y.name}/></div>
                                    })}
                                    </div>
                                    <hr className={styles.hr}/>
                                </>
                            )
                        } else{
                            return (
                                <>
                                    <h4 className={styles.subTitle}> {x.name}</h4>
                                    <div className={!isMobile ? styles.section : null}>
                                    {x[x.name].map((y) => {
                                        return <div className={styles.progressBar}><ProgressBar value={y.value} title={y.name}/></div>
                                    })}
                                    </div>
                                </>
                            )
                        }
                    })}

            </div>
        </>
    );
}

export default Knowledge;