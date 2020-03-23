import React, { Component } from 'react';

import ChatInput from "./ChatInput.js";
import MessageList from "./MessageList.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default class AscToolsWebChat extends Component {

	/* The following constructor, and the function updateDimensions(), componentDidMount(), componentWillUnmount() 
		will allow for the width and height of the viewport window to be changed my the user, and for the app
		to always be full screen within the browser. It was necessary to do it this way in order for the 
		app to be displayed correctly on mobile too.
	*/
  constructor() {
    super();
    this.state = {
      width:  800,
      height: 182
    }
  }

  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = Math.round(update_width/4.4);
      this.setState({ width: update_width, height: update_height });
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return(
		<div height={this.state.height} width={this.state.width}>
			<div className="WindowBackground">
				<MessageList/>
				<ChatInput />
			</div>
			
		</div>
	);
  }
}