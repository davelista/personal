import React, {useEffect} from "react";
import {Home, Details} from "./pages";
import {Footer, Navbar} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import { AppContext, useAppContext } from "./context/AppContext";
import ScrollToTop from "./pages/ScrollToTop";
import Project from "./pages/Project";

const App = () => {

    useEffect(() => {
        const script = document.createElement('script')
        script.src = "https://analytics.davidelista.com/js/script.js"
        script.async = true;
        document.body.appendChild(script)
    }, []);

    const appData = useAppContext();

      return (
        <>
            <AppContext.Provider value={appData}>

                <Router>
                    <ScrollToTop>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/">
                          <Home/>
                        </Route>
                        <Route exact path="/details">
                            <Details/>
                        </Route>
                        <Route exact path="/project/:projectName">
                            <Project/>
                        </Route>
                        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
                    </Switch>

                    <Footer/>
                    </ScrollToTop>
                </Router>
            </AppContext.Provider>
        </>
      );
}

export default App;
