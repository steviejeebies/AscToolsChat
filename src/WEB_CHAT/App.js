import { Components } from 'botframework-webchat-component';
import { createDirectLine, createStore } from 'botframework-webchat';
import React, { useState, useEffect } from 'react';
import AscToolsWebChat from "./AscToolsWebChat";
import directLineDisconnect from 'botframework-webchat-core/lib/actions/disconnect';

import Button from 'react-bootstrap/Button';

var secret = process.env.DIRECT_LINE_SECRET;

// ORIGINAL
// async function getDirectLineToken() {
//   const res = await fetch('https://directline.botframework.com/v3/directline/tokens/generate', { method: 'POST', 
// //  mode: 'no-cors',
//   headers: {
// //      'Content-Type': 'application/json',
//       'Authorization': 'Bearer iQ0RbsV7tfA.Iv9w0NYvH7OoZJxqilYyZMdbK-xLhYlco0piDalWT00'
//       }});
//   const { token } = await res.json();

//   return token;
// }

const initializeDirectLine = async setDirectLine => {
  const res = await fetch('https://directline.botframework.com/v3/directline/tokens/generate', { method: 'POST', 
  //  mode: 'no-cors',
    headers: {
  //  'Content-Type': 'application/json',
        'Authorization': 'Bearer iQ0RbsV7tfA.Iv9w0NYvH7OoZJxqilYyZMdbK-xLhYlco0piDalWT00'
        }});
  const { token } = await res.json();
  setDirectLine(createDirectLine({ token }));
};

function App() {
  const [directLine, setDirectLine] = useState();
  useEffect(() => {
    initializeDirectLine(setDirectLine);
  }, []);

  const storeMiddleware = () => next => action => {
    if (action.type === 'DIRECT_LINE/DISCONNECT_FULFILLED') {
      setDirectLine(null);
      setStore(createStore({}, storeMiddleware));
      initializeDirectLine(setDirectLine);
    }
    return next(action)
  };

  const [store, setStore] = useState(createStore({}, storeMiddleware));

  console.log(store);

  const disconnect = () => store.dispatch(directLineDisconnect());

// ORIGINAL
//   const [directLine, setDirectLine] = React.useState();

//   if (!directLine) {
//     // We will load DirectLineJS asynchronously on first render.
//     getDirectLineToken().then(token => setDirectLine(createDirectLine({ token })));
//   }

// // The following return value is just to let us know if we are connected to the MockBot
// // When running the app, it should switch from "Not Connected!" to "Connected!" quickly

  return (
	<div>
    <Button onClick={disconnect}>Button</Button>
		{!!directLine && (
        <Components.Composer directLine={directLine} store={store}>
          <AscToolsWebChat />
        </Components.Composer>
      )}
	</div>
  );
}

export default App;
