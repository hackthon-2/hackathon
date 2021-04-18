import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import "./custom-image-crop.css";
import "inter-ui/inter.css";
import Login from "./views/Login";
import Nav from "./components/Nav";
import Diary from "./views/Diary";
import Statistics from "./views/Statistics";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import Home from "./views/Home";
import axios from "axios";



export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/diary">
            <Diary Link={Link} Nav={Nav} />
          </Route>
          <Route path="/home">
            <Home Link={Link} Nav={Nav} />
          </Route>
          <Route path="/statistics">
            <Statistics Link={Link} Nav={Nav} />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <GeistProvider>
              <CssBaseline />
              <Login />
            </GeistProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Topics() {
  let match = useRouteMatch();
  return (
    <div>
      因为前端太弱 代开发
      <Nav Link={Link} />
    </div>
  );
}

