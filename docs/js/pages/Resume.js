import React from "react";
import {Link} from "react-router";
import ScrollSnapTo from "../components/ScrollSnapTo.js"

// LAYOUT
import ResumeHeader from "../components/layout/ResumeHeader.js";
import Footer from "../components/layout/Footer.js";

export default class Resume extends React.Component {
  render() {
    return(
      <div>
      <ScrollSnapTo x="0" y="0" />
      <ResumeHeader />
      <section id="resume">
      	<div class="wrap">
      		<div id="resume-wrap" class="row">
      			<ul class="vpc resume-header">
      				<li class="ga-logo-wrap">
      					<a class="ga-logo" href="" title="Goto Homepage | GeebArt Logo">GA</a>
      				</li>
      				<li class="title-card">
      					<a href="" title="">Chris <span>&ldquo;Geeb&rdquo; </span>Smith</a>
      					<small>Director, Creative Technology</small>
      				</li>
      				<li class="address">
      					<ul>
      						<li>1560 E 97th Ct.</li>
      						<li>Thornton, CO, 80229</li>
      						<li>815-685-1855</li>
      					</ul>
      				</li>
      				<li>
      					<p>I am a UI/UX Developer turned <strong>Creative Technology Director</strong> with over 8 years experience.  I've managed teams of 20 or more, worked with offshore teams, partnered with numerous vendors and built million-dollar platforms for fortune 500 companies. I infuse all of this with a collaborative approach that promotes high design and expert problem solving.</p>
      				</li>
      			</ul>
      			<div class="vpc">
      				<ul class="main">
      					<li>
      						<i>2015 to Present</i>
      						<h3><strong>Development/Platform Manager</strong> at Aisle Rocket Studios</h3>
      						<p>Owning a dual title, I manage the team and business objectives for our most prolific web platforms. From code, design, content and KPI's, I help facilitate and define success. Collaborative at heart, I play the ultimate supporting role in the agency by bridging common gaps between departments and individuals.</p>
      						<small>Leadership, Culture Building, Product Management, Technology Direction, Project Management, Development, DevOps, Hosting, Release Management, Analytics, SEO, SEM, UI/UX</small>
      					</li>
      					<li>
      						<i>2013 to 2015</i>
      						<h3><strong>Lead Front End Developer</strong> at Aisle Rocket Studios</h3>
      						<p>Key technology stakeholder on largest development projects. Responsibilities include: mentorship for junior team members, resource planning, project management, coding and release management.</p>
      						<small>HTML5, CSS3, JS, Agngular.js, React.js, PHP, Node.js, Ruby, UI/UX</small>
      					</li>
      					<li>
      						<i>2011 to 2013</i>
      						<h3><strong>Front End Developer</strong> at Aisle Rocket Studios</h3>
      						<p>Collaborated with designers, copy writers and directors to code out email campaigns, landing pages, websites, apps and more. Won Best B2C Website from the 2012 CIMA's for <a href="https://cookmore.com" title="Visit Cookmore" target="_blank">Cookmore.com</a>.</p>
      						<small>HTML5, CSS3, JS, Motion Design, PHP</small>
      					</li>
      					<li>
      						<i>2009 to 2011</i>
      						<h3><strong>Graduate Assistant, Web Intern &amp; Youth Instructor</strong> at ISU</h3>
      						<p>During my two-year stint as a Master's student at Illinois State University, I spent time helping teach college coursework, developing and designing websites, writing essays, and volunteering as a digital arts youth instructor.</p>
      						<small>Teaching, Mentorship, Collaboration, Writing, Art Installation, Coding, Design, Video, Volunteerism</small>
      					</li>
      					<li>
      						<i>2005 to 2008</i>
      						<h3><strong>Lead Level Designer</strong> at BattleGrounds Mod</h3>
      						<p>Responsible for designing 3D levels for an online, first-person shooter built on the Half-Life game engine. The team worked remotely with members spanning the entire globe. The game saw many releases and was mentioned in prominent gaming magazines.</p>
      						<small>Level Design, Game Design, Coding, Collaboration, Online Communities and Culture</small>
      					</li>
      					<li>
      						<i>Ongoing</i>
      						<h3><strong>Freelance Developer and Designer </strong></h3>
      						<p>Over the years, I've independently partnered with a wide range of businesses, agencies and organizations.  As a freelancer, I've built product catalogs, musician sites, brand marketing destinations, in-store displays and more.</p>
      						<small>Development, Design, Client Relations, Project Management, Consultation</small>
      					</li>
      				</ul>
      			</div>
      			<hr />
      			<div class="vpc vpw-2 education">
      				<ul>
      					<li><strong>M.S. Arts Technology</strong> &mdash; 2011</li>
      					<li>Illinois State University</li>
      				</ul>
      			</div>
      			<div class="vpc vpw-2 education">
      				<ul>
      					<li><strong>B.S. Arts Technology</strong> &mdash; 2009</li>
      					<li>Illinois State University</li>
      				</ul>
      			</div>
      		</div>
      	</div>
      </section>
    <Footer />
  </div>
    );
  }
}
