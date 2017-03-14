import React from "react";
import {Link} from "react-router";
import Scrollchor from "react-scrollchor";

export default class ProjectHeader extends React.Component{
  render(){

    const projectPrev = this.props.projectPrev;
    const projectNext = this.props.projectNext;

    return(
      <header id="slide">
    		<nav class="slide-nav">
    			<ul>
            <li class="right">
              <Link to="/" title="Back to previous screen" class="back">&times;</Link>
            </li>
    				<li class="prev">
    					<Link to={"project/" + projectPrev} title="Previous Project">&lsaquo;</Link>
    				</li>
            <li class="next">
    					<Link to={"project/" + projectNext} title="Next Project">&rsaquo;</Link>
    				</li>
    			</ul>
    		</nav>
    	</header>
    );
  }
}
