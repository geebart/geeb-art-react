// DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";
import { IndexLink, Link } from "react-router";
import * as firebase from "firebase";

// FIREBASE CONFIG
const config = {
    apiKey: "AIzaSyBhgQCMqzfPk8mWv1zmlD1XlA69Z5Zru8E",
    authDomain: "geebart-react.firebaseapp.com",
    databaseURL: "https://geebart-react.firebaseio.com",
    storageBucket: "geebart-react.appspot.com",
    messagingSenderId: "628076241625"
};

// INITIALIZE FIREBASE
firebase.initializeApp(config);

// LAYOUT
import Footer from "../components/layout/Header.js";
import Header from "../components/layout/Footer.js";

// SECTIONS
import SectionHero from "../sections/Hero.js";
import SectionHire from "../sections/Hire.js";
import SectionOrigins from "../sections/Origins.js";
import SectionNative from "../sections/Native.js";
import SectionWork from "../sections/Work.js";
import SectionSkills from "../sections/Skills.js";
import SectionInstagram from "../sections/Instagram.js";
import SectionDenver from "../sections/Denver.js";

// MAIN
export default class Main extends React.Component {
  render(){
    return(
      <div>
      <Footer />
      <main>
        <SectionHero />
    		<SectionHire />
    		<SectionOrigins />
    		<SectionNative />
        <SectionWork />
        <SectionSkills />
        <SectionInstagram />
        <SectionDenver />
    	</main>
      <Header />
    </div>
    );
  }
}
