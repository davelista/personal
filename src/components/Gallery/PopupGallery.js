import React from 'react';
import styles from "./Gallery.module.css";
import {IoMdClose} from "react-icons/all";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

function PopupGallery(props) {
    const {image, i, onChangeOpen, onChangeCurrent, current, number} = props

    const prevImg = () => {
        onChangeCurrent(current === 0 ? number-1 : current - 1)
    }

    const nextImg = () => {
        onChangeCurrent(current === number-1 ? 0 : current + 1)
    }

    return (
        <>
            <div className={styles.overlay}>

                <div className={styles.popup} >
                    <div className={styles.closeSection}>
                        <span className={styles.closeButton} onClick={() => onChangeOpen(false)}><IoMdClose /></span>
                    </div>
                    <div className={styles.container}>
                            <MdKeyboardArrowLeft className={styles.leftArrow} onClick={prevImg}/>
                            <img src={image} className={styles.image} alt={`Immagine ${i} dei Conturbanti`}/>
                            <MdKeyboardArrowRight className={styles.rightArrow} onClick={nextImg}/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default PopupGallery;