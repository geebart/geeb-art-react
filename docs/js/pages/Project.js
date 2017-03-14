// DEPENDENCIES
import React from "react";
import LazyLoad from "react-lazyload";
import {Link} from "react-router";
import * as firebase from "firebase";

// LAYOUT
import ProjectHeader from "../components/layout/ProjectHeader.js";
import Footer from "../components/layout/Footer.js";

// PROJECT SINGLE VIEW
import ProjectSingle from "../components/ProjectSingle.js";

export default class Project extends React.Component {

  constructor() {
    super();
    this.state.project = {
      project: {
        "slug": "placeholder",
        "order": 0,
        "cardTitle": "Craftsman Club",
        "cardBrandIcon": "work-club-logo.png",
        "cardThumb": "work-club-bg.jpg",
        "heroBackground": "project-club-hero.jpg",
        "largeBrandIcon": "work-club-logo-cut.png",
        "heroLinkHref": "https://club.craftsman.com",
        "heroLinkTitle": "Goto club.craftsman.com",
        "heroLinkClass": "",
        "heroLinkText": "Visit the Site",
        "singleTitle": "Craftsman Club Social Network",
        "singleTitleMarginTop": "2rem",
        "singleParagraph": "With a legion of loyal users, Club serves as a core destination for brand advocates and the DIY maker movement. Constructing the experience took thousands of man hours, dozens of team members and multiple phases. Building from scratch, our team provided all development, hosting, design, UI/UX and copy. To complete the project, we used an Agile approach complete with user personas, user stories and kanban board.",
        "compImage": "project-comp-club.png",
        "compImageAlt": "Craftsman Club Site Responsive Comp",
        "secondaryHref": "",
        "secondaryTitle": "",
        "secondaryClass": "",
        "secondaryText": "",
        "secondaryButtonsMarginBottom": "4rem",
        "taskList": "Product Direction, Technology Direction, Project Management, SEO consultation, Analytics, UI/UX, Front-End Development, Back-End Development, Quality Assurance"
      }
    }
    this.state.projects = {
      "placeholder": this.state.project
    }
  }

  componentDidMount(){
    const projects = firebase.database().ref().child('projects');
    projects.on("value", data => {
      this.setState({projects: data.val()})
      this.setState({project: this.state.projects[this.state.project]})
    });
  }

  render() {

    const projects = this.state.projects;
    const projectsData = [];

    // CREATE NEW OBJECT OF PROJECTS SORTED BY ORDER KEY VALUES
    Object.keys(projects).forEach(function(item, key){

      // ADD TO NEW OBJECT ARRAY
      projectsData.push(projects[item]);

    });

    // SORTED BY ORDER KEY VALUES
    const projectsDataSorted = projectsData.sort(function(a, b){
      return a.order - b.order;
    });

    const projectsDataClean = [];
    projectsDataSorted.forEach(function(item, key){

      if(typeof projectsDataSorted[key - 1] !== "undefined"){
        projectsDataSorted[key].projectPrev = projectsDataSorted[key - 1].slug;
      } else{
        projectsDataSorted[key].projectPrev = false;
      }

      if(typeof projectsDataSorted[key + 1] !== "undefined"){
        projectsDataSorted[key].projectNext = projectsDataSorted[key + 1].slug;
      } else{
        projectsDataSorted[key].projectNext = false;
      }

      projectsDataClean[item.slug] = item;

    });

    console.log(this);

    if(projectsDataClean.length > 0){
      const slug = this.state.projects["craftsman-club"].slug;
      const project = projectsDataClean[slug];
      const projectPrev = project.projectPrev;
      const projectNext = project.projectNext;
    } else{
      const slug = this.state.project.slug;
      const project = projectsDataClean[slug];
      const projectPrev = false;
      const projectNext = false;
    }

    return(
      <div>
        <ProjectHeader projectPrev={projectPrev} projectNext={projectNext} />
        <ProjectSingle project={project} />
        <Footer />
      </div>
    );
  }
}
