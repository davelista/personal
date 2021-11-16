import React from 'react';
import {Banner, About, Skills, Overview, Projects} from "../components";
import CookieConsent from "react-cookie-consent";

const Home = (props) => {
    return (
        <>
            <Banner/>
            <About />
            <Skills/>
            <Overview/>
            <Projects id='projects' />
            <CookieConsent
                location="bottom"
                buttonText="OK"
                style={{ background: "#0b4e6c" }}
                buttonStyle={{ color: "#0b4e6c", fontSize: "13px", background: "#f59e24" }}
                expires={150}
            >
                This website uses cookies to enhance the user experience.{" "}
            </CookieConsent>
        </>
    );
}

export default Home;