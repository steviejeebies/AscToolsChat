import { Components } from 'botframework-webchat-component';
import { createDirectLine } from 'botframework-webchat';
import React from 'react';
import AscToolsWebChat from "./AscToolsWebChat";


var connected = false;
const secret = process.env.DIRECT_LINE_SECRET;

async function getDirectLineToken() {
  const res = await fetch('https://directline.botframework.com/v3/directline/tokens/generate', { method: 'POST', 
//  mode: 'no-cors',
  headers: {
//      'Content-Type': 'application/json',
      'Authorization': 'Bearer jnLsvivnLz0.YXh4pTEiXu_VSWzg6aEHwmPpVMPvq_Tkg8T51EHsR7A'
      }});
  const { token } = await res.json();

  return token;
}

function App() {
  const [directLine, setDirectLine] = React.useState();

  if (!directLine) {
    // We will load DirectLineJS asynchronously on first render.
    getDirectLineToken().then(token => setDirectLine(createDirectLine({ token })));
  }

// The following return value is just to let us know if we are connected to the MockBot
// When running the app, it should switch from "Not Connected!" to "Connected!" quickly

  return (
	<div>
		{!!directLine && (
        <Components.Composer directLine={directLine}>
          <AscToolsWebChat />
        </Components.Composer>
      )}
	</div>
  );
}

export default App;
