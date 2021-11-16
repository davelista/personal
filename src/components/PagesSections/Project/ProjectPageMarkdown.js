import React from 'react';
import PropTypes from "prop-types";
import styles from "./ProjectPageMarkdown.module.css"
import Markdown, { compiler } from "markdown-to-jsx";
import MediaCarousel from "../../Utils/MediaCarousel";
import ImportPdf from "../../Utils/ImportPdf";
import Gallery from "../../Gallery/Gallery";


const ProjectPageMarkdown = (props) => {
    const {page} = props;

    const ProjectPageCompiler = compiler( page, {
        overrides:{
            MediaCarousel: {component: MediaCarousel},
            ImportPdf: {component: ImportPdf},
            Gallery: {component: Gallery}
        }
    })

    return (
        <>
            <div className={styles.container}>
                {ProjectPageCompiler}
            </div>
        </>
    );
}

export default ProjectPageMarkdown;