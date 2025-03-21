import { useRef } from "react";
import PropTypes from "prop-types";

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value = "";

        //update chat history with the user's message
        setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

        //Delay 600 ms before showing "Thinking..." and generating response
        setTimeout(() => {

          //Add a "Thinking..." placeholder for the bot's response 
          setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);

          //Call the function to generate Bot's response
          generateBotResponse([...chatHistory, {role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }]);
        },600);
    };
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input ref={inputRef} type="text" placeholder="Message..."
        className="message-input" required/>
        <button
            className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChatForm