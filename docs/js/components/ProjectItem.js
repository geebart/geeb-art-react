// DEPENDENCIES
import React from "react";
import LazyLoad from "react-lazyload";
import {Link} from "react-router";

// UI COMPONENTS
import Placeholder from "../components/Placeholder.js";

// MAIN
export default class ProjectItem extends React.Component {
  render(){

    const project = this.props.projectItem;

    return(
      <li class="vpc vpw-4 project" data-project={project.slug}>
        <div class="project-card">
          <Placeholder />
          <div class="background">
            <LazyLoad height={"25%"}>
              <img class="lazy" src={"images/" + project.cardThumb} />
            </LazyLoad>
          </div>
          <Link to={"/project/" + project.slug + "?projectPrev=" + project.projectPrev + "&projectNext=" + project.projectNext} projectPrev={project.projectPrev} projectNext={project.projectNext} class="logo" title={project.cardTitle}>
            <LazyLoad height={"25%"}>
              <img class="lazy" src={"images/" + project.cardBrandIcon} />
            </LazyLoad>
          </Link>
        </div>
      </li>
    );
  }
}
