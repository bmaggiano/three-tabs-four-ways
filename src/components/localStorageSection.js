import React, { useState, useEffect } from "react";
import ReactIcon from "./reactIcon";

export default function LocalStorageSection() {
  // initialize localStorageMessage variable to an empty string
  const [localStorageMessage, setLocalStorageMessage] = useState("");

  // set messages variable to an array of messages
  const messages = [
    "This is the message for tab 1",
    "This is the message for tab 2",
    "This is the message for tab 3",
  ];

  // set localStorage value of messages to stringigied value of messages
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  });

  const handleClick = (index) => {
    // retrieve value of "messages" from local storage
    const localMessage = localStorage.getItem("messages");
    // convert local storage value into an object
    const storedMessages = JSON.parse(localMessage);
    // set localStorageMessage of the value of the current index
    setLocalStorageMessage(storedMessages[index])
  }

  return (
    <>
      <section className="useEffect">
        <div className="description-container-three">
          <h2 className="description-title-dark">
            useEffect &nbsp;
            <ReactIcon />
          </h2>
          <p className="description">
            <span>
              This method uses the useEffect hook to set an array of messages in
              local storage & returns the array value on a user's click
            </span>
          </p>

          {/* this section will be hidden until users hover over description-container-three */}
          <p>
            <span className="hidden">
              // create messages array & localStorageMessage variable
              <br />
              <span className="code-example">
                const [localStorageMessage, setLocalStorageMessage] =
                useState("");
                <br />
                const [messages] = ["This is the message for tab 1", ...];
              </span>
              <br />
              // useEffect hook to set localStorage with messages array
              <br />
              <span className="code-example">
                useEffect = () =&gt; {"{"}
                <br />
                localStorage.setItem("messages", JSON.stringify(messages));
                {"}"};
              </span>
              <br />
              // onClick, retrieve message from localStorage and set value
              <br />
              <span className="code-example">
                onClick={"{"}() =&gt; {"{"}
                <br />
                const localMessage = localStorage.getItem("messages");
                <br />
                const storedMessages = JSON.parse(localMessage);
                <br />
                setLocalStorageMessage(storedMessages[0]);
                {"}"}
                {"}"}
              </span>
              <br />
              // style to your liking
            </span>
          </p>
        </div>
        <div className="tabs-container-three">
          <div className="button-container">
            <button
              className="left-button"
              // invoke the handleClick function at the index of 0
              onClick={() => {
                handleClick(0)
              }}
            >
              Tab 1
            </button>
            <button
              className="middle-button"
              onClick={() => {
                handleClick(1)
              }}
            >
              Tab 2
            </button>
            <button
              className="right-button"
              onClick={() => {
                handleClick(2)
              }}
            >
              Tab 3
            </button>
          </div>
          <div className="message-box message-box-dark">
            <p>
                {/* present the user the localStorageMessage or if value is null, present standard message */}
              {localStorageMessage ||
                "Click on the tabs to see different messages using the useEffect hook"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
