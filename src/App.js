import React, {useEffect} from "react";
import {Home, Details} from "./pages";
import {Footer, Navbar} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import { AppContext, useAppContext } from "./context/AppContext";
import ScrollToTop from "./pages/ScrollToTop";
import ReactGA from "react-ga";
import Project from "./pages/Project";

const App = () => {

    useEffect(() => {
        ReactGA.initialize("UA-142377641-1 ");
        //to report page view
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const appData = useAppContext();

      return (
        <>
            <AppContext.Provider value={appData}>
                <script defer data-domain="davidelista.com" src="https://analytics.davidelista.com/js/script.js"></script>
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
