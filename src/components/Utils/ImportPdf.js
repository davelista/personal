import React from 'react';

const ImportPdf = (props) => {
    const {folder, fileName, text} = props;

    const fileToBeLoaded = require(`../../data/documents/${folder}/${fileName}`).default

    return (
        <>
            <a href={fileToBeLoaded} target="_blank">{text}</a>
        </>
    );
}

export default ImportPdf;