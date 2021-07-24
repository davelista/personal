import React from "react";
import {Home, Details} from "./pages";
import {Footer, Navbar} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AppContext, useAppContext } from "./context/AppContext";

const App = () => {

    const appData = useAppContext();

      return (
        <>
            <AppContext.Provider value={appData}>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/">
                          <Home/>
                        </Route>
                        <Route exact path="/details">
                            <Details/>
                        </Route>
                    </Switch>
                    <Footer/>
                </Router>
            </AppContext.Provider>
        </>
      );
}

export default App;
