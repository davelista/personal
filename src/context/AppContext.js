import React, {useMemo, useState} from "react";
import projectsList from '../data/projects.json';
import knowledgesList from "../data/knowledges.json";
import experiencesList from '../data/experience.json';
import educationList from '../data/education.json';

export const AppContext = React.createContext({});

export function useAppContext() {

    const [selectedProject, setSelectedProject] = useState();

    return useMemo(
        () => ({
            projectsList,
            knowledgesList,
            experiencesList,
            educationList,

            project:{
                data: selectedProject,
                setData: setSelectedProject
            }
        }),
        [selectedProject]
    );
}
