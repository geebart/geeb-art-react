// DEPENDENCIES
import React from "react";
import LazyLoad from "react-lazyload";

// MAIN
export default class SectionOrigins extends React.Component {
  render(){
    return(
      <section id="origins">
        <div class="screen"></div>
        <div class="wrap">
          <div class="row">
            <h3>Branding at Birth</h3>
            <h4>How'd you get that nickname?</h4>
            <div class="vpc vpw-40">
              <figure>
                <LazyLoad height={"300px"} width={"241px"}>
                <img class="lazy" width="241" height="300" src="images/geeber-241x300.jpg" alt="Geeber!" />
                </LazyLoad>
                <div class="shadow"></div>
                <figcaption>Geeber! (2011) &mdash; Identity Reconnected</figcaption>
              </figure>
            </div>
            <div class="vpc vpw-60">
              <p>
                One day, my mother took me and my brothers to go grocery shopping. While going down the baby food aisle my little brother started acting weird. All of the sudden, he began pointing up at Gerber baby food jars on the shelf.
              </p>
              <p>
                My mom took notice and encouraged him to speak up. In frustration, he kept pointing at the shelf and then back at me without an auditory response. Eventually, he squeaked out, "Geeber!" instead of "Gerber!". He mistakenly thought I was the baby featured on all the Gerber products.
              </p>
              <p>
                From then on, I would be known as "Geeber" or "Geeb" for short. Little did I know, "Geeb" would later become my brand .
              </p>
              <p>
                <a class="button scroll" data-scroll="#native" href="#" title="Scroll down the page to the next section">Go Native</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
