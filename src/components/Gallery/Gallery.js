import React, {useState} from 'react';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import styles from './Gallery.module.css'
import PopupGallery from "./PopupGallery";

const Gallery = (props) => {
    const {folder, fileName, folderThumb, number, extension} = props;
    const [current, setCurrent] = useState(0);
    const [openImage, setOpenImage] = useState(false);
    const [openGallery, setOpenGallery] = useState(false);
    const images = [];

    for( let i = 1; i <= number; i++){
        images.push({
            origin: require(`../../data/img/${folder}/${fileName}-${i}.${extension}`).default,
            thumbnail: require(`../../data/img/${folderThumb}/${fileName}-${i}-small.${extension}`).default
        });
    }



    return (
        <>


            <div>
                {images.map((x, i) => {
                    if(i === current && openImage){
                        return(
                            <PopupGallery image={x.origin} i={i} onChangeOpen={setOpenImage} onChangeCurrent={setCurrent} current={current} number={number}/>
                        )
                    }

                })}

            </div>

            <div className={styles.thumb}>
                {images.map((x, j) => {
                    return(
                        <img src={x.thumbnail} className={styles.thumbImages} alt={`Immagine ${j} dei Conturbanti`} onClick={() => {
                            setCurrent(j);
                            setOpenImage(true);
                        }}/>

                    )
                })}
            </div>

        </>
    );
}

export default Gallery;