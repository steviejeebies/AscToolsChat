import React from "react";
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import { hooks } from 'botframework-webchat-component';
const { useSendMessage } = hooks;

function TextBox(props) {
    var thisStyle = {};
    var userName = "";

    const sourceOfMessage = props.message.from.role;
    const time = props.message.timestamp.substring(11, 19);
    if (sourceOfMessage === "bot") {
        userName = "Asclepius.Tools";
        thisStyle = {alignSelf: "flex-start", flexShrink:0, minWidth:"100px", marginLeft: "1vw", whiteSpace: "pre-line"};
        
    }
    else{ // if(sourceOfMessage = "user") 
        userName = "You";
        thisStyle = {alignSelf: "flex-end", flexShrink:0, minWidth:"100px", marginRight: "1vw"};
    }

    const sendMessage = useSendMessage();

    // This is boolean that checks if the message object passed has attachments at all
    const shouldIncludeButtonPrompts = (props.message.hasOwnProperty("attachments")) && !!props.message.attachments;
    
    // This method will extract the innerHTML from a prompt button that was pressed, and will send it
    const sendPromptReply = event => {
        event.preventDefault();
		sendMessage(event.target.innerHTML);
    }

    // This will make a list of buttons to display, but only if the above shouldIncludeButtonPrompts is true
    var i = 0;
    const promptsButtonList = (shouldIncludeButtonPrompts) ? 
                            props.message.attachments[0].content.buttons.map(thisButton => 
                                <Button key={i++} onClick={sendPromptReply} variant="outline-secondary" block>{thisButton.text}</Button>) 
                            : null;

    return (
        <Toast style={thisStyle}>
            <Toast.Header closeButton={false}>
                <strong className="mr-auto">{userName}</strong>
                <small>{time}</small>
            </Toast.Header>
            <Toast.Body>{text}</Toast.Body>
            {promptsButtonList}
        </Toast> 
    );
}

export default TextBox;
