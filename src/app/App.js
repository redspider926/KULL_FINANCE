import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./layout";
import Landing from "./pages/landing";
import NotFound from "./pages/not-found";
import "animate.css";

// import { Provider } from "react-redux";
// import store from "./store";

import "./App.css";

const App = () => {
  return (
    // <Provider store={store}>
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Landing {...props} />} />

          <Route
            exact
            path="/404"
            render={(props) => <NotFound {...props} />}
          />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </Layout>
    // </Provider>
  );
};

export default App;
