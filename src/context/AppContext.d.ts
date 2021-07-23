import type React from "react";

export interface IProjects {
    data: {
        "title": string,
        "description": string,
        "tag": string,
        "datore": string,
        "internal": string,
        "external": string,
        "github": string
    };
}

interface IAppContext {
    projects: IProjects;
}

export declare const AppContext: React.Context<IAppContext>;

export declare const useAppContext: () => IAppContext;
