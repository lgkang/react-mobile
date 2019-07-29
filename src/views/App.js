import React from "react";
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {mainRouter} from "../routes/router";
import {Provider} from "react-redux";
import {store} from "../store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    {
                        mainRouter.map(router => {
                            return <Route path={router.path} key={router.path} component={router.component}
                                          exact/>;
                        })
                    }
                </Switch>
                <Redirect to={mainRouter[0].path} from='/'/>
            </Router>
        </Provider>
    );
}

export default App;
