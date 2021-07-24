import React, { useMemo } from "react";
import projectsList from '../projects.json';
import knowledgesList from "../knowledges.json";
import experiencesList from '../experience.json';
import educationList from '../education.json';

export const AppContext = React.createContext({});

export function useAppContext() {

    return useMemo(
        () => ({
            projectsList,
            knowledgesList,
            experiencesList,
            educationList
        }),
        []
    );
}
