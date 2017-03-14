// DEPENDENCIES
import React from "react";
import * as firebase from "firebase";

// MODELS AND UI COMPONENTS
import ProjectItem from "../components/ProjectItem.js";

// LAYOUT COMPONENTS
import Header from "../components/layout/Footer.js";

// MAIN
export default class Project extends React.Component {

  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentDidMount(){
    const projects = firebase.database().ref().child('projects');
    projects.on("value", data => {
      this.setState({projects: data.val()})
    });
  }

  render(){

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

      projectsDataClean.push(projectsDataSorted[key]);

    });

    return(
      <ul class="projects-wrap">
        {
          projectsDataClean.map(function(item, key){
            return <ProjectItem key={key} projectItem={item} projectPrev={item.projectPrev} projectNext={item.projectNext}/>
          })
        }
      </ul>
    );
  }
}
