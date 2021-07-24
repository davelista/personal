import React from "react";
import {Home, Details} from "./pages";
import {Footer, Navbar} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import { AppContext, useAppContext } from "./context/AppContext";
import ScrollToTop from "./pages/ScrollToTop";

const App = () => {

    const appData = useAppContext();

      return (
        <>
            <AppContext.Provider value={appData}>
                <ScrollToTop>
                <Router>

                    <Navbar/>
                    <Switch>
                        <Route exact path="/">
                          <Home/>
                        </Route>
                        <Route exact path="/details">
                            <Details/>
                        </Route>
                        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
                    </Switch>
                    <Footer/>
                </Router>
                </ScrollToTop>
                </AppContext.Provider>
        </>
      );
}

export default App;
