import React from "react";
import {
    autoSizeImage,
    autoSizeMultipleImage,
    horizontalOverflow,
    imageMargin,
    mediaCarousel,
    multipleImage,
} from "./MediaCarousel.module.css";
import { IS_WEBP_SUPPORTED } from "../../utils/Constants.utils";

const getImageLinkWithExtension = (imageLink) => {
    if (IS_WEBP_SUPPORTED && imageLink.endsWith(".png")) {
        return `${imageLink.substring(0, imageLink.length - 4)}.webp`;
    }
    return imageLink;
};

const MediaCarousel = ({ folder, images }) => {
    const imageFileNames = images.split(",");
    const imagesToBeLoaded = [];

    for (let i = 0; i < imageFileNames.length; i += 1) {
        imagesToBeLoaded.push(
            require(`../../data/img/${folder}/${getImageLinkWithExtension(
                imageFileNames[i]
            )}`).default

        );
    }

    return (
        <>

            <div
                className={`${horizontalOverflow}  ${mediaCarousel} ${
                    imagesToBeLoaded.length > 1 && multipleImage
                }`}
            >
                {imagesToBeLoaded.map((imageRelativeLink, index) =>
                    imageRelativeLink !== undefined && imageRelativeLink.endsWith(".mp4") ? (
                        <video
                            className={`${autoSizeImage} ${
                                imagesToBeLoaded.length > 1 && autoSizeMultipleImage
                            } ${index > 0 && imageMargin}`}
                            loop
                            autoPlay
                            playsInline
                            muted
                            key={imageRelativeLink}
                        >
                            <source src={imageRelativeLink} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img
                            src={imageRelativeLink}
                            className={`${autoSizeImage} ${
                                imagesToBeLoaded.length > 1 && autoSizeMultipleImage
                            } ${index > 0 && imageMargin}`}
                            alt={imageRelativeLink}
                            key={imageRelativeLink}
                        />
                    )
                )}
            </div>
        </>
    );
};

export default MediaCarousel;