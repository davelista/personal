import React from 'react';
import styles from './Footer.module.css'
import {FaFacebook, FaGithub, FaLinkedinIn, HiMail, IoMdPin, RiInstagramFill} from "react-icons/all";
import useMediaQuery, {Device} from "../../hooks/useMediaQuery";

const Footer = (props) => {
    const isMobile = useMediaQuery(Device.sm);
    return (
        <>
        <div className={styles.container}>


                <div className={styles.items}>
                    <h4 className={styles.item} >Davide Lista</h4>
                    <div className={styles.item}>Software Engineer</div>
                    <div className={styles.item}><a href="mailto:davide.lista@outlook.com"> <HiMail size={20} style={{marginRight:"0.5rem"}}/>davide.lista@outlook.com</a></div>
                    <div className={styles.item}><IoMdPin size={20} style={{marginRight:"0.5rem"}}/>Milano</div>
                </div>
            {isMobile ? <hr className={styles.hr}/> : null}
                <div className={styles.items}>
                    <h4 className={styles.item}>Seguimi</h4>
                    <div className={styles.item}>Si prova ad essere social</div>
                    <div className={styles.item}><FaFacebook size={20} style={{marginRight:"0.5rem"}}/> <FaLinkedinIn size={20} style={{marginRight:"0.5rem"}}/> <RiInstagramFill size={20} style={{marginRight:"0.5rem"}}/> <FaGithub size={20} style={{marginRight:"0.5rem"}}/> </div>
                </div>

        </div>
        </>
    );
}

export default Footer;