import React, {useContext} from 'react';
import {Header, Knowledge, Experience, TimelineSection} from "../components";
import {AppContext} from "../context/AppContext";
import educationList from "../education.json";

const Details = (props) => {
    const appData = useContext(AppContext);
    return (
        <>
            <Header title={"Dettagli"}/>
            <Knowledge/>
            <TimelineSection titleSection={"Esperienze"} list={appData.experiencesList} id='#experiences' />
            <TimelineSection titleSection={"Istruzione"} list={appData.educationList}/>
        </>
    );
}

export default Details;