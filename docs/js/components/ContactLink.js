import React from "react";
import { Link } from "react-router";
import Scrollchor from "react-scrollchor";

export default class ContactLink extends React.Component {

  // DEFAULTS FOR CONTACT
  constructor() {
    super();
    this.state = {contact: false};
  }

  // SET STATE ON ANIMATE
  updateContactState(bool){
    const contact = (bool == "true");
    const docBody = document.body;
    const docBodyClass = docBody.className;
    if(contact){
      docBody.className = docBodyClass + " show-contact";
    } else{
      docBody.className = docBodyClass.replace("show-contact", "");
    }
    this.setState({contact: contact});
  }

  render() {

    // ANIMATE FROM BODY CLASS
    const contact = this.state.contact;
    const bodyClass = contact ? 'show-contact' : '';

    // PASS BUTTON PROP DATA
    const button = this.props;
    const icon = button.icon;
    const iconHTML = icon ? "<span class='icon'>" + icon + "</span> " : "" ;

    return(
      <span>
        <Scrollchor to="browser" animate={{offset: -90}} afterAnimate={() => this.updateContactState(button.open)} class={button.classes} title={button.title}>
          { icon ? (
              <span class="icon">{icon} </span>
            ) : (
              ""
            )
          }
          {button.text}
        </Scrollchor>
      </span>
    );
  }
}
