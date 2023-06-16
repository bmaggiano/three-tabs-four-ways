import React, { useState, useEffect } from "react";
import ActiveSection from "./components/activeSection";
import RenderSection from "./components/renderSection";
import ReactIcon from './components/reactIcon'
import "./App.css";

export default function App() {
  const [localStorageMessage, setLocalStorageMessage] = useState("");

  const messages = [
    "This is the message for tab 1",
    "This is the message for tab 2",
    "This is the message for tab 3",
  ];

// this will set a value of "messages" to local storage after the component mounts
// this messages value will contain the messages array in string format
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  });


  return (
    <>
      <header>
        <h1 className="title">
          Three Tabs Three Ways<span className="underline"></span>
        </h1>
        <span className="title-subtext">
          With vibrant popping colors that give{" "}
          <span className="electric">"electric"</span> vibes!
        </span>
        <br />
      </header>

      <main>

        <ActiveSection/>

        <RenderSection/>

        <section className="useEffect">
          <div className="description-container-three">
            <h2 className="description-title-dark">
              useEffect &nbsp;
              <ReactIcon />
            </h2>
            <p className="description">
              <span>
                This method uses the useEffect hook to set an array of messages
                in local storage & returns the array value on a user's click
              </span>
            </p>
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
                  <br />
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
                // These functions retrieve the messages value from local storage
                // then parses the string that we're retrieving into a workable array
                // the sets the localStorageMessage value to the element of the parsed data that we're
                // looking to display

                // add to function up top  
                onClick={() => {
                  const localMessage = localStorage.getItem("messages");
                  const storedMessages = JSON.parse(localMessage);
                  setLocalStorageMessage(storedMessages[0]);
                }}
              >
                Tab 1
              </button>
              <button
                className="middle-button"
                onClick={() => {
                  const localMessage = localStorage.getItem("messages");
                  const storedMessages = JSON.parse(localMessage);
                  setLocalStorageMessage(storedMessages[1]);
                }}
              >
                Tab 2
              </button>
              <button
                className="right-button"
                onClick={() => {
                  const localMessage = localStorage.getItem("messages");
                  const storedMessages = JSON.parse(localMessage);
                  setLocalStorageMessage(storedMessages[2]);
                }}
              >
                Tab 3
              </button>
            </div>
            <div className="message-box message-box-dark">
              <p>
                {localStorageMessage ||
                  "Click on the tabs to see different messages using the useEffect hook"}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
