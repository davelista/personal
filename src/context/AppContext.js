import React, { useMemo } from "react";
import projectsList from '../projects.json'

export const AppContext = React.createContext({});

export function useAppContext() {

    return useMemo(
        () => ({
            projectsList
        }),
        [projectsList]
    );
}
