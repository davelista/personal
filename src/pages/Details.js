import React from 'react';
import {Header} from "../components";
import Knowledge from "../components/PagesSections/Details/Knowledge";

const Details = (props) => {
    return (
        <>
            <Header title={"Dettagli"}/>
            <Knowledge/>
        </>
    );
}

export default Details;