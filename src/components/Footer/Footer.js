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
                    <div className={styles.item}>
                        <a href="https://www.facebook.com/davlista"><FaFacebook size={20} style={{marginRight:"0.5rem"}}/></a>
                        <a href="https://it.linkedin.com/public-profile/in/davide-lista/"><FaLinkedinIn size={20} style={{marginRight:"0.5rem"}}/></a>
                        <a href="https://www.instagram.com/davedz_/"><RiInstagramFill size={20} style={{marginRight:"0.5rem"}}/></a>
                        <a href="https://github.com/davelista"><FaGithub size={20} style={{marginRight:"0.5rem"}}/></a>
                        </div>
                </div>

        </div>
        </>
    );
}

export default Footer;