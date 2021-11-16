import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../context/AppContext";
import Markdown from 'markdown-to-jsx';
import {useParams} from "react-router";
import {Header} from "../components";
import ProjectPageMarkdown from "../components/PagesSections/Project/ProjectPageMarkdown";

const Project = (props) => {
    const appData = useContext(AppContext);
    const { projectName } = useParams();
    const [post, setPost] = useState('');

    useEffect(() => {
        if(projectName !== null){
            findProject();
        }

        if(appData.project.data !== undefined){
            import(`../data/documents/markdown/projects/${appData.project.data.file_name}`)
                .then(res => {
                    fetch(res.default)
                        .then(res => res.text())
                        .then(res => setPost(res))
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
        }

    }, [projectName, appData])

    const findProject = () => {
        appData.projectsList.map((x, i) => {

            if(projectName === x.link) {
                appData.project.setData(x);
            }})

    }

    let header;

    appData.project.data !== undefined ? header = (
        <>
            <Header title={appData.project.data.title}/>

        </>
    ) : header = (<div/>)


    return (
        <>
            {header}
            <div style={{marginBottom: "3rem"}}>
                <ProjectPageMarkdown page={post}/>
            </div>

        </>
    );
}

export default Project;