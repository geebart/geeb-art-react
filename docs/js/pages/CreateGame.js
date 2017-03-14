// DEPENDENCIES
import React from "react";
import * as firebase from "firebase";

// LAYOUT COMPONENTS
import Header from "../components/layout/Footer.js";

// MAIN
export default class Project extends React.Component {

  constructor() {
    // super();
    // this.state = {
    //   projects: []
    // }
  }

  componentDidMount(){
    // const projects = firebase.database().ref().child('projects');
    // projects.on("value", data => {
    //   this.setState({projects: data.val()})
    // });
  }

  render(){
    return(
      <h1>Create a Game</h1>
      <form>
        <input type="input" value="" placeholder="John Doe" />
        <input type="input" value="12345" readonly />
        <input type="submit" value="Start Game" />
      </form>
    );
  }
}
