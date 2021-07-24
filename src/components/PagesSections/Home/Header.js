import React from 'react';
import styles from "./Header.module.css";
import ReactTyped from "react-typed";
import {FaGithub, FaLinkedinIn, VscDebugStackframeDot} from "react-icons/all";
import Fade from 'react-reveal/Fade';

function Header(props) {

    return (
        <>
            <div className={styles.container}>

                <div className={styles.section}>
                    <h1 className={ styles.title}>
                        <div style={{color:"white"}}>Ciao, sono</div>
                        <ReactTyped
                            loop
                            typeSpeed={70}
                            backSpeed={80}
                            strings={[
                                "Davide",
                                "un software engineer",
                                "uno studente universitario",
                                "un chitarrista"
                            ]}
                            smartBackspace
                            shuffle={false}
                            backDelay={100}
                            fadeOut={false}
                            fadeOutDelay={150}
                            loopCount={0}
                            showCursor
                            cursorChar="_"
                        />
                    </h1>
                    <h6 className={styles.mail}><a href="mailto:davide.lista@outlook.com">
                        <VscDebugStackframeDot/> davide.lista@outlook.com <VscDebugStackframeDot/>
                    </a></h6>
                    <div className={styles.social}>

                            <Fade left>
                                <div className={styles.icon}>
                                <FaLinkedinIn/>
                                </div>
                            </Fade>


                            <Fade left>
                                <div className={styles.icon}>
                                <FaGithub/>
                                </div>
                            </Fade>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;