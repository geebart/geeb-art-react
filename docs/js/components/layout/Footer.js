import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
    		<div class="wrap">
    			<div class="row">
    				<ul class="vpc vpw-3">
    					<li><strong>Denver Address</strong></li>
    					<li>1560 E 97th Ct.</li>
    					<li>Thornton, CO, 80229</li>
    				</ul>
    				<ul class="vpc vpw-3">
    					<li><strong>Chicago Address</strong></li>
    					<li>3108 W Grace St. #2</li>
    					<li>Chicago, IL, 60451</li>
    				</ul>
    				<ul class="vpc vpw-3">
    					<li><strong>Additional Contact Information</strong></li>
    					<li><a href="tel:18156851855" target="_blank" class="tel"><span class="icon">&#xe942;</span> 815-685-1855</a></li>
    					<li><span class="icon">&#xeac5;</span> thegreatgeebe</li>
    				</ul>
            <hr/>
              <ul class="social">
                <li><a class="icon" href="https://www.facebook.com/thegreatgeeber" target="_blank" title="Geeb on Facebook">&#xea90;</a></li>
                <li><a class="icon" href="https://www.instagram.com/instageeber/" target="_blank" title="Geeb on Instagram">&#xea92;</a></li>
                <li><a class="icon" href="https://twitter.com/theGreatGeeber" target="_blank" title="Geeb on Twitter">&#xea96;</a></li>
                <li><a class="icon" href="https://www.linkedin.com/in/chris-geeb-smith-67673b28" target="_blank" title="Geeb on LinkedIn">&#xeaca;</a></li>
                <li><a class="icon" href="https://open.spotify.com/user/1264863766" target="_blank" title="Geeb on Spotify">&#xea94;</a></li>
              </ul>
              <p class="vpc right">Chris "Geeb" Smith &copy; 2016 &mdash; <a href="https://github.com/geebart/geeb-art-3" title="GeebArt 3 on GitHub" target="_blank">Hosted on GitHub</a></p>
            </div>
          </div>
    	</footer>
    );
  }
}
