import React from 'react';
import {Header, About, Skills, Overview, Projects} from "../components";

function Home(props) {
    return (
        <>
            <Header/>
            <About/>
            <Skills/>
            <Overview/>
            <Projects/>
        </>
    );
}

export default Home;