import React from 'react';
import useMediaQuery, { Device } from '../../../hooks/useMediaQuery';
import styles from "./Skills.module.css";
import {
    VscFileCode,
    VscOpenPreview,
    VscRepoForked
} from "react-icons/all";
import {Button} from "../../index";

const Skills = (props) => {
    const isMobile = useMediaQuery(Device.sm);

    return (
        <>
            <div className={styles.container}>
                {isMobile ? <h3 className={styles.title}>
                    Competenze
                </h3> : <h1 className={styles.title}>
                    Competenze
                </h1>}

                <div className={styles.skills}>
                    <div className={styles.item}>
                        <VscFileCode size={45}/>
                        <h5>Web Development</h5>
                    </div>
                    <div className={styles.item}>
                        <VscRepoForked size={45} />
                        <h5>Software Development</h5>
                    </div>
                    <div className={styles.item}>
                        <VscOpenPreview size={45} />
                        <h5>Consulenza</h5>
                    </div>
                </div>
                <div className={styles.button}>
                    <Button buttonStyle='btn--primary'>Scopri di più</Button>
                </div>

            </div>
        </>
    );
}

export default Skills;