import React from 'react';
import { Components } from 'botframework-webchat-component';
import ChatInput from "./ChatInput.js";
import MessageList from "./MessageList.js";

import 'bootstrap/dist/css/bootstrap.min.css';

function AscToolsWebChat(props) {
	let vh = window.innerHeight * 0.01;
	let vw = window.innerWidth * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	document.documentElement.style.setProperty('--vw', `${vw}px`);

	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		let vw = window.innerWidth * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		document.documentElement.style.setProperty('--vw', `${vw}px`);
	  });
	return(
		<div>
			<div className="WindowBackground">
			{!!props.directLine &&
				<Components.Composer directLine={props.directLine} store={props.store}>
					<MessageList/>
					<ChatInput />
				</Components.Composer>
			}
			</div>
			
		</div>
	)
}

export default AscToolsWebChat;
