import React from 'react';
import {Banner, About, Skills, Overview, Projects} from "../components";

function Home(props) {
    return (
        <>
            <Banner/>
            <About />
            <Skills/>
            <Overview/>
            <Projects id='projects' />
        </>
    );
}

export default Home;