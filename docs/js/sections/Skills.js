// DEPENDENCIES
import React from "react";

// MAIN
export default class SectionSkills extends React.Component {
  render(){
    return(
      <section id="skills">
        <div class="screen"></div>
        <div class="wrap">
          <div class="row">
            <h3>Get Started with Geeb Today</h3>
            <h4>Skills and Qualifications</h4>
            <div id="saas-table">
              <div class="vpc vpw-4 saas-column">
                <h6><small>Basic</small>UI/UX</h6>
                <ul>
                  <li>Whiteboarding/Wireframing</li>
                  <li>Live Prototyping</li>
                  <li>Interactions</li>
                  <li>Responsive Design</li>
                  <li>Digital Style Guides</li>
                </ul>
              </div>
              <div class="vpc vpw-4 saas-column">
                <h6><small>Professional</small>Development</h6>
                <ul>
                  <li>PHP/Ruby</li>
                  <li>SQL and NoSQL DB</li>
                  <li>HTML5 and CSS3</li>
                  <li>JavaScript and Node</li>
                  <li>RESTful Web Services</li>
                </ul>
              </div>
              <div class="vpc vpw-4 saas-column">
                <h6><small>Small Business</small>Product Management</h6>
                <ul>
                  <li>Analytics Backed Strategy</li>
                  <li>KPI Development</li>
                  <li>Agile Project Management</li>
                  <li>Resource Planning</li>
                  <li>QA/CQ/UAT</li>
                </ul>
              </div>
              <div class="vpc vpw-4 saas-column large">
                <h6><small>Enterprise</small>Leadership</h6>
                <ul>
                  <li>Management</li>
                  <li>Product Owner</li>
                  <li>Inspiration &amp; Culture</li>
                  <li>Presenter</li>
                  <li>Client Relations</li>
                </ul>
                <div class="purchase center">
                  <a class="button ghost dark scroll hire-me-trigger" href="#" data-scroll="#hire-me" title="Scroll to Next Section">Hire Me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
