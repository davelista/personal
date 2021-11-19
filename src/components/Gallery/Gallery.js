import React, {useState} from 'react';
import styles from './Gallery.module.css'
import PopupGallery from "./PopupGallery";

const Gallery = (props) => {
    const {folder, fileName, folderThumb, number, extension, title} = props;
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

            <h4 ><ul><li className={!openGallery ? styles.title : styles.titleActive} onClick={() => setOpenGallery(!openGallery)}>{title}</li></ul></h4>
            {openGallery ?
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
                : null
            }


        </>
    );
}

export default Gallery;