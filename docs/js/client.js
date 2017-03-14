// APP DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";
import Scrollchor from 'react-scrollchor';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// LAYOUT
import Layout from "./pages/Layout.js";
import Footer from "./components/layout/Header.js";
import Header from "./components/layout/Footer.js";

// PAGES
import Main from "./pages/Main.js";
import Resume from "./pages/Resume.js";
import Project from "./pages/project.js";

// APP MOUNT
const app = document.getElementById('app');

// ROUTES
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main}></IndexRoute>
      <Route path="hire-me" name="hire-me" component={Main} />
      <Route path="resume" name="resume" onUpdate={() => window.scrollTo(0, 0)} component={Resume} />
      <Route path="project/(:project)" name="project" component={Project} />
    </Route>
  </Router>,
app);
