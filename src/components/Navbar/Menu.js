import React from 'react';
import styles from "./Navbar.module.css";
import {RiArrowDownSLine} from "react-icons/all";
import {ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper} from "@material-ui/core";
import useMediaQuery, {Device} from "../../hooks/useMediaQuery";

function Menu(props) {
    const {openMobile} = props;
    const isMobile = useMediaQuery(Device.sm);
    const [open, setOpen] = React.useState(false);

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

    return (
        <>

            <div style={isMobile ? (openMobile ? {transform: "translateX(0)"} : { transform: "translateX(100%)"}) : null} className={styles.menu}>
                <div className={styles.item}>HOME</div>
                { !isMobile ? <>
                    <div ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        className={styles.item}>
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
                                        <MenuItem onClick={handleClose}>Dettagli Personali</MenuItem>
                                        <MenuItem onClick={handleClose}>Competenze</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
                </> : <div className={styles.item}>
                    CHI SONO </div>}
                <div className={styles.item}>PROGETTI</div>
                <div className={styles.item}>ESPERIENZE</div>
            </div>
        </>
    );
}

export default Menu;