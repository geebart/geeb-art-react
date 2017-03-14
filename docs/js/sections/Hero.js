// DEPENDENCIES
import React from "react";
import YouTube from "react-youtube";
import Scrollchor from "react-scrollchor";

// MAIN
export default class SectionHero extends React.Component {
  render(){

    const videoArgs = {
      height: '100%',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        'rel': 0,
  			'controls': 0,
  			'showinfo': 0,
  			'autoplay': 1,
  			'loop': 1,
  			'modestbranding': 1,
  			'frameborder': 0,
  			'allowfullscreen': 1,
  			'vq':'hd1080'
      }
    };

    function onStateChange(event) {
      console.log('HERE!');
    }

    return(
      <section id="greet-hero" class="active">
        <YouTube id="player" videoId="Oy15fCRPJ5U" opts={videoArgs} onStateChange={onStateChange(this)} />
        <div class="table">
          <div>
            <div>
              <div class="wrap">
                <div class="row">
                  <h1>Chris<span class="non-mobile"> </span><br class="mobile" />&ldquo;Geeb&rdquo;<span class="non-mobile"> </span><br class="mobile" />Smith</h1>
                  <h2>A <strong>Creative Technology Director</strong> on an epic quest <br class="non-mobile" />to find work in <strong>Denver, Colorado</strong></h2>
                  <div class="center down-wrap">
              			<Scrollchor to="hire-me" title="Click or Scroll Down"><small>Scroll Down</small><br/><span class="icon">&darr;</span></Scrollchor>
              		</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="center down-wrap">
          <Scrollchor to="hire-me" title="Scroll Down"><small>Scroll Down</small><br/><span class="icon">&darr;</span></Scrollchor>
        </div>
      </section>
    );
  }
}
