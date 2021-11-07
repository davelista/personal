import styles from "./Navbar.module.css";
import useMediaQuery, { Device } from '../../hooks/useMediaQuery';
import {Link} from 'react-router-dom';
import logoBlu from "../../img/logo/davidelista/dl-blu.png";
import logoBluSmall from "../../img/logo/davidelista/dl-blu-small.png";
import logoWhite from "../../img/logo/davidelista/dl-white.png";
import logoWhiteSmall from "../../img/logo/davidelista/dl-white-small.png";
import React, {useState} from 'react';
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";


const Navbar = () => {
    const isTablet = useMediaQuery(Device.md);
    const isMobile = useMediaQuery(Device.sm)
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 100){
            setNavbar(true);
        } else setNavbar(false);
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className={navbar ? styles.navbarActive : styles.navbar}>
                <Link to='/' >
                    {!isMobile ? <img src={navbar ? logoBlu : logoWhite} className={styles.logo} alt={"Peccato, non puoi vedere il mio bellissimo logo"}/> :
                        <img src={navbar ? logoBluSmall : logoWhiteSmall} className={styles.logoMobile} alt={"Peccato, non puoi vedere il mio bellissimo logo"}/>}
                </Link>
                { !isTablet ? <Menu /> : <MobileMenu/>}

            </nav>
        </>
    );
}

export default Navbar;