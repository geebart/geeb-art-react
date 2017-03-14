// DEPENDENCIES
import React from "react";
import LazyLoad from "react-lazyload";
import {Link} from "react-router";
import Scrollchor from "react-scrollchor"

// UI COMPONENTS
import Placeholder from "../components/Placeholder.js";

// MAIN
export default class ProjectSingle extends React.Component {
  render(){

    const project = this.props.project;

    return(
      <div class={"outer-wrap " + project.slug}>
      	<section class="work-slide-hero" style={{backgroundImage: "url(images/" + project.heroBackground + ")"}}>
      		<div class="wrap">
      			<div class="row">
      				<div class="table-wrap">
                <div class="table">
                  <div>
                    <div>
                      <div>
                				<div class="vpc center">
                					<img class="large" src={"images/" + project.largeBrandIcon} /><br/>
                					<a href={project.heroLinkHref} class={"button " + project.heroLinkClass} title={project.heroLinkTitle} target="_blank">{project.heroLinkText}</a>
                				</div>
      				         </div>
                    </div>
                  </div>
                </div>
              </div>
      			</div>
      		</div>
      		<div class="center down-wrap">
      			<Scrollchor to="work-summary" title="Click or Scroll Down"><small>Scroll Down</small><br/><span class="icon">&darr;</span></Scrollchor>
      		</div>
      	</section>
      	<section id="work-summary" class="work-summary">
      		<div class="wrap">
      			<div class="row">
      				<div class="vpc vpw-40">
      					<h5 style={{marginTop: project.singleTitleMarginTop}}>{project.singleTitle}</h5>
      					<p>{project.singleParagraph}</p>
                <a href={project.heroLinkHref} class={"button " + project.heroLinkClass} style={{marginBottom: project.secondaryButtonsMarginBottom}} title={project.heroLinkTitle} target="_blank">{project.heroLinkText}</a>
                {
                  (project.secondaryHref) ?
                    <a href={project.secondaryHref} class={"button " + project.secondaryClass} style={{marginLeft: "2rem"}} title={project.secondaryTitle} style={{marginBottom: project.secondaryButtonsMarginBottom}} target="_blank">{project.secondaryText}</a>
                  :
                  <span>{/* DO NOTHING?!?! */}</span>
                }
              </div>
      				<div class="vpc vpw-60">
      					<img src={"images/" + project.compImage} alt={project.compImageAlt} />
      				</div>
              <hr />
      				<div class="vpc task-list">
      					<p>{project.taskList}</p>
      				</div>
      			</div>
      		</div>
      	</section>
      </div>
    )
  }
}
