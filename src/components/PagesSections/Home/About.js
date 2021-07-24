import React from 'react';
import styles from "./About.module.css";
import Me from "../../../img/cv-foto.png"
import useMediaQuery, { Device } from '../../../hooks/useMediaQuery';
import {AiOutlineCloudDownload} from "react-icons/all";
import {Button} from "../../index";

const About = (props) => {
    const isMobile = useMediaQuery(Device.sm);
    return (
        <>
            <div className={styles.container} id='#about'>
                <img src={Me} className={styles.image} alt={"Peccato, non puoi vedere quanto sono bello"}/>
                <div className={styles.personal}>
                    {isMobile ? <h4 className={styles.title}>
                        Dettagli personali
                    </h4> : <h1 className={styles.title}>
                        Dettagli personali
                    </h1>}
                    <div className={styles.text}>
                        Dopo essermi laureato in Ingegneria Informatica presso il Politecnico di Milano, ho deciso di concretizzare
                        la mia passione per la musica, coltivata fin da bambino con lo studio della chitarra e del pianoforte,
                        iscrivendomi al corso di laurea magistrale in Music And Acoustic Engineering.
                        La voglia di mettere alla prova le conoscenze apprese a lezione, unita alla mia naturale curiosità,
                        mi ha portato fin dal primo anno di università a collaborare con varie aziende, nonché a intraprendere
                        progetti personali come la compagnia teatrale senza scopo di lucro “I Conturbanti” e il servizio di Web Development "dyblab".
                    </div>

                        <div className={styles.button}>
                            <Button buttonStyle='btn--primary'><AiOutlineCloudDownload size={25}
                                                                                        style={{marginRight: "0.5rem"}}/>{isMobile ? "CV" : "Curriculum vitae"}</Button>
                        </div>
                </div>
            </div>
        </>
    );
}

export default About;