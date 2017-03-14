// DEPENDENCIES
import React from "react";

// MODELS AND UI COMPONENTS
import Projects from "../pages/Projects.js";

// MAIN
export default class SectionWork extends React.Component {
  render(){
    return(
      <section id="work">
        <div class="wrap">
          <div class="row">
            <h3>View My Work</h3>
            <h4>From Musicians and Artists to American Made Brands</h4>
          </div>
        </div>
        <Projects />
        {/* <li class="vpc vpw-4 project">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-club-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/craftsman-club.html" target="_blank" title="View the Craftsman Club Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-club-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="diehard-brand">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-diehard-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/diehard.html" target="_blank" title="See All Diehard Projects">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-diehard-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="craftsman-brand">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-craftsman-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/craftsman.html" target="_blank" title="View the Craftsman.com Brand Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-craftsman-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="wild-child-band">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-wildchild-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/wild-child.html" target="_blank" title="View the Wild Child  Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-wild-child-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="amana-brand">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-amana-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/amana.html" target="_blank" title="View the Amana Brand Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-amana-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="reframe-brand">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-reframe-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/reframe.html" target="_blank" title="View the Reframe Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-reframe-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="kenmore-brand">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-kenmore-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/kenmore.html" target="_blank" title="View the Kenmore.com Brand Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-kenmore-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="cookmore">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-cookmore-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/cookmore.html" target="_blank" title="View the Cookmore.com Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-cookmore-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="diehard-fans">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-diehard-from-the-start-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/diehard-fans.html" target="_blank" title="View the Diehard from the Start Contest Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-diehard-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="gladiator-blog">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-ggw-blog-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/ggw.html" target="_blank" title="View the Gladiator GarageWorks Blog Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-ggw-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="aisle-rocket-portfolio">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-ars-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/aislerocket.html" target="_blank" title="View the Diehard from the Start Contest Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-ars-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="hyh-catalog">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-halyard-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/hyh.html" target="_blank" title="View the Halyard Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-halyard-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="ninjatown">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-ninjatown-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/ninjatown.html" target="_blank" title="View the Ninjatown Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-ninjatown-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="maytag-brand">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-maytag-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/maytag.html" target="_blank" title="View the Maytag Brand Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-maytag-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="whirlpool-brand">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-whirlpool-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/whirlpool.html" target="_blank" title="View the Whirlpool Brand Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-whirlpool-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
            </li>
            <li class="vpc vpw-4 project" data-project="syw-brand">
            <div class="project-card">
              <Placeholder />
              <div class="background">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-syw-bg.jpg"/>
                </LazyLoad>
              </div>
              <a class="logo" href="work/shopyourway.html" target="_blank" title="View the Shop Your Way Website">
                <LazyLoad height={"25%"}>
                  <img class="lazy" src="images/work-syw-logo.png"/>
                </LazyLoad>
              </a>
            </div>
            <div class="work-content"></div>
        </li> */}
      </section>
    );
  }
}
