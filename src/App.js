import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { HomePage, ServicesPage, SignUpPage, ProfilePage } from "./pages";
import "./styles/reset.sass";
import "./styles/icons.sass";

function App() {
  const [admin, setAdmin] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    // <BrowserRouter basename="/akbarstenders/">
      <BrowserRouter basename="/">
      <Switch>
        <Route
          path="/"
          component={() => (
            <HomePage userId={userId} setUserId={setUserId} admin={admin} />
          )}
          exact
        />
        <Route
          path="/services"
          component={() => (
            <ServicesPage userId={userId} setUserId={setUserId} admin={admin} />
          )}
          exact
        />
        <Route
          path="/"
          component={() => (
            <HomePage userId={userId} setUserId={setUserId} admin={admin} />
          )}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
