import React, {useContext} from 'react';
import {Header, Knowledge, TimelineSection} from "../components";
import {AppContext} from "../context/AppContext";

const Details = (props) => {
    const appData = useContext(AppContext);
    return (
        <>
            <Header title={"Dettagli"}/>
            <Knowledge id='knowledge'/>
            <TimelineSection titleSection={"Esperienze"} list={appData.experiencesList}  />
            <TimelineSection titleSection={"Istruzione"} list={appData.educationList}/>
        </>
    );
}

export default Details;