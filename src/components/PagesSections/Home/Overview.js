import React, {useContext, useState} from 'react';
import styles from './Overview.module.css'
import AnimatedNumber from "animated-number-react";
import useMediaQuery, {Device} from "../../../hooks/useMediaQuery";
import { AppContext } from "../../../context/AppContext";

const Overview = (props) => {

    const appData = useContext(AppContext);
    const isMobile = useMediaQuery(Device.sm)
    const [projects, setProjects] = useState(0);
    const [experience, setExperience] = useState(0);
    const [coffee, setCoffee] = useState(0);

    const changeNumbers = () => {
        if(isMobile){
            if(window.scrollY >= 3000){
                setProjects(appData.projectsList.length);
                setExperience(5);
                setCoffee(70);
            }
        } else {
            if(window.scrollY >= 1200){
                setProjects(appData.projectsList.length);
                setExperience(5);
                setCoffee(70);
            }
        }

    }

    window.addEventListener('scroll', changeNumbers);

    return (
        <>
            <section className={styles.area}>
                <div className={styles.overview}>
                    <h1 className={styles.number} id="projects">
                        <AnimatedNumber
                            value={projects}
                            duration={1200}
                            formatValue={n => n.toFixed(0)}
                            frameStyle = {percentage => percentage > 20 && percentage < 80 ? {opacity: 0} : {}}
                        />
                    </h1>
                    <div className={styles.text} >
                        Progetti personali
                    </div>
                </div>
                <div className={styles.overview}>
                    <h1 className={styles.number} id={"experience"}>
                        <AnimatedNumber
                            value={experience}
                            duration={1000}
                            formatValue={n => n.toFixed(0)}
                            frameStyle = {percentage => percentage > 20 && percentage < 80 ? {opacity: 0} : {}}
                        />
                    </h1>
                    <div className={styles.text}>
                        Esperienze
                    </div>
                </div>
                <div className={styles.overview}>
                    <h1 className={styles.number} id={"coffee"}>
                        <AnimatedNumber
                            value={coffee}
                            duration={1200}
                            formatValue={n => n.toFixed(0)}
                            frameStyle = {percentage => percentage > 20 && percentage < 80 ? {opacity: 0} : {}}
                        />
                    </h1>
                    <div className={styles.text}>
                        Tazze di caffè
                    </div>
                </div>
            </section>
        </>
    );
}

export default Overview;