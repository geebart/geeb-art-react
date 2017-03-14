// DEPENDENCIES
import React from "react";
import {Link} from "react-router";

// HIRE ME LINK
import ContactButton from "../components/ContactLink.js";

// MAIN
export default class SectionHire extends React.Component {
  render(){
    return(
      <section id="hire-me">
        <div class="wrap">
          <div class="row">
            <div id="browser">
              <ul class="dots-and-tabs">
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
              </ul>
              <div class="content">
                <div class="wrap">
                  <div class="row">
                    <div id="contact" class="frame-wrap">
                      <div id="headshot-frame" class="frame">
                        <div class="vpc">
                          <h3>
                            <span class="bubble">Hello.</span>
                            <div class="personalities">
                            <span class="intro non-mobile">I'm a:</span>
                            <ul class="slider">
                              <li class="active">Technology Director</li>
                              <li>Ping Pong Sensei</li>
                              <li>Technology Director</li>
                              <li>Game of Thrones Fanboy</li>
                              <li>Developer Extraordinaire</li>
                              <li>Gin and Tonic Connoisseur</li>
                              <li>User Experience Developer</li>
                              <li>Health Nut</li>
                              <li>Quality Assurance Advocate</li>
                              <li>Avid Gamer</li>
                              <li>Creative Technologist</li>
                              <li>UI/UX Developer</li>
                            </ul>
                          </div>
                          </h3>
                          <h6>Why Denver?</h6>
                          <p>I am destined to move West. From the squeaky clean streets to the mountain scapes, Denver is a beautiful utopia. This is the place where my creative spark will shine brightest. </p>
                          <h6>What do I bring to the table?</h6>
                          <p>I am a UI/UX Developer turned <strong>Creative Technology Director</strong> with a knack for problem solving and collaboration. I've managed teams of 20 or more, worked with offshore teams and 3rd party vendors, built million-dollar platforms for fortune 500 companies and I infuse all of this with a <strong>creative approach</strong>.</p>
                          <ContactButton classes="button" text="Let's Talk" icon="&#xe945;" open="true"/>
                        </div>
                        <div id="map"></div>
                      </div>
                      <div id="form-frame" class="frame">
                        <div class="vpc vpw-1">
                          <h3>Contact Geeb</h3>
                          <form id="contact-form" method="POST">
                            <label for="Name">Name</label>
                            <input type="text" name="Name" placeholder="John Smith" />
                            <label for="From">Email</label>
                            <input type="email" name="From" placeholder="john@smith.com" />
                            <label for="Message">Message</label>
                            <textarea name="Message" placeholder="Got the Geeber fever? Tell me why."></textarea>
                            <div class="loading-wrap">
                              <ContactButton classes="button" text="Back" icon="&#8617;" title="Go Back to Previous Slide" open="false" />
                              <input class="button dark" type="submit" value="Send" />
                              <span class="progress"></span>
                            </div>
                            <div class="message-wrap">
                              <span class="error-icon">&times;</span>
                              <span class="checkmark-icon">&#10003;</span>
                              <span class="message"></span>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
