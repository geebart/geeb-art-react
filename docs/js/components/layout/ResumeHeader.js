import React from "react";
import {Link} from "react-router";
import Scrollchor from "react-scrollchor";

export default class Header extends React.Component {
  render(){
    return(
      <header id="slide">
    		<nav class="wrap slide-nav">
    			<ul>
    				<li class="right">
    					<Link to="/" title="Back to previous screen" class="back">×</Link>
    				</li>
    			</ul>
    		</nav>
    	</header>
    );
  }
}
