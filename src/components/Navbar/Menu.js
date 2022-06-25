import React from 'react';
import styles from "./Navbar.module.css";
import {RiArrowDownSLine} from "react-icons/all";
import {ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper} from "@material-ui/core";
import useMediaQuery, {Device} from "../../hooks/useMediaQuery";
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Menu(props) {
    const {openMobile, onChangeOpenMobile} = props;
    const isMobile = useMediaQuery(Device.sm);
    const [open, setOpen] = React.useState(false);
    const path = window.location.pathname;

    const anchorRef = React.useRef(null);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    const closeMobileMenu = () => {
        if(isMobile){
            onChangeOpenMobile(!openMobile);
        }
    }

    return (
        <>

            <div style={isMobile ? (openMobile ? {transform: "translateX(0)"} : { transform: "translateX(100%)"}) : null} className={styles.menu}>
                <Link to='/'>
                    <div className={styles.item} onClick={closeMobileMenu}>HOME</div>
                </Link>

                { !isMobile ? <>

                    <div ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        className={styles.item}

                    >
                    CHI SONO <RiArrowDownSLine/></div>

                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <HashLink to='/#about' >
                                        <MenuItem onClick={handleClose} style={{color:"#222222"}}>Dettagli Personali</MenuItem>
                                        </HashLink>
                                        <HashLink to='/details/#knowledge' >
                                        <MenuItem onClick={handleClose} style={{color:"#222222"}}>Competenze</MenuItem>
                                        </HashLink>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                    </Popper>

                </> : <HashLink to='/#about'><div className={styles.item} onClick={closeMobileMenu}>
                    CHI SONO </div> </HashLink>}
                <HashLink to='/#projects'>
                <div className={styles.item} onClick={closeMobileMenu}>PROGETTI</div>
                </HashLink>
                <HashLink to='/details/#experiences'>
                <div className={styles.item} onClick={closeMobileMenu}>ESPERIENZE</div>
                </HashLink>
                {path !== '/' ? null : <a href='https://davidelista.tech' target={"_blank"}>
                    <div className={styles.itemColored} onClick={closeMobileMenu}>TECH IT EASY</div>
                </a>}

            </div>
        </>
    );
}

export default Menu;