import React, { useState, useEffect } from "react";
import MessageOne from "./components/messageOne";
import MessageTwo from "./components/messageTwo";
import MessageThree from "./components/messageThree";
import LightningIcon from "./components/lightningIcon";
import RenderIcon from "./components/renderIcon";
import ReactIcon from "./components/reactIcon";
import "./App.css";

export default function App() {
  const [active, setActive] = useState(0);
  const [componentToShow, setComponentToShow] = useState(null);
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

  // this is our function for setting the index value for our "active" variable
  const handleClick = (index) => {
    setActive(index);
  };

  // this is our functions for rendering a component based on which numeric string value we set 
  // componentToShow to
  const showComponentOne = () => {
    setComponentToShow("one");
  };

  const showComponentTwo = () => {
    setComponentToShow("two");
  };

  const showComponentThree = () => {
    setComponentToShow("three");
  };

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
        <section className="state">
          <div className="description-container-one">
            <h2 className="description-title-dark">
              Active &nbsp;
              <LightningIcon />
            </h2>
            <p className="description">
              <span>
                This method uses state to make a button active and show a
                message based off which button is active
              </span>
              <br />
            </p>
            <p>
              <span className="hidden">
                // initialize state variable to 0
                <br />
                <span className="code-example">
                  const [active, setActive] = useState(0);
                </span>
                <br />
                // onClick, set state variable to index
                <br />
                <span className="code-example">
                  const handleClick = (index) =&gt; {"{"}
                  setActive(index)
                  {"}"};
                </span>
                <br />
                // set className = "active-button" if active index ===
                handleClick(index)
                <br />
                <span className="code-example">
                  className={"{"}
                  active === 1 ? "active-button" : ""
                  {"}"}
                </span>
                <br />
                // style to your liking
              </span>
            </p>
          </div>

          <div className="tabs-container-one">
            <div className="button-container">
              <button
                className={
                  active === 1 ? "active-button left-button" : "left-button"
                }
                onClick={() => handleClick(1)}
              >
                Tab 1
              </button>
              <button
                className={
                  active === 2 ? "active-button middle-button" : "middle-button"
                }
                onClick={() => handleClick(2)}
              >
                Tab 2
              </button>
              <button
                className={
                  active === 3 ? "active-button right-button" : "right-button"
                }
                onClick={() => handleClick(3)}
              >
                Tab 3
              </button>
            </div>
            <div className="message-box message-box-dark">
              <p>
                {messages[active - 1] ||
                  "Click on the tabs to see different messages using the active method"}
              </p>
            </div>
          </div>
        </section>

        <section className="render">
          <div className="tabs-container-two">
            <div className="button-container">
              <button className="left-button" onClick={showComponentOne}>
                Tab 1
              </button>
              <button className="middle-button" onClick={showComponentTwo}>
                Tab 2
              </button>
              <button className="right-button" onClick={showComponentThree}>
                Tab 3
              </button>
            </div>
            <div className="message-box message-box-light">
              {componentToShow === null && (
                <p>
                  Click on the tabs to see different messages using component
                  rendering
                </p>
              )}
              {componentToShow === "one" && <MessageOne />}
              {componentToShow === "two" && <MessageTwo />}
              {componentToShow === "three" && <MessageThree />}
            </div>
          </div>
          <div className="description-container-two">
            <h2 className="description-title-light">
              Render &nbsp;
              <RenderIcon />
            </h2>
            <p className="description">
              <span className="span-dark">
                This method uses component rendering based off of state
                switching from null to a specificed value
              </span>
            </p>
            <p>
              <span className="hidden">
                // initialize componentToShow variable to null & import
                components
                <br />
                <span className="code-example span-dark">
                  import MessageOne from "./components/messageOne";
                  <br />
                  const [componentToShow, setComponentToShow] = useState(null);
                </span>
                <br />
                // onClick, set component variable to string numeric value
                <br />
                <span className="code-example span-dark">
                  const showComponentOne = () =&gt; {"{"}
                  setComponentToShow("one")
                  {"}"};
                </span>
                <br />
                // render component based on value of componentToShow
                <br />
                <span className="code-example span-dark">
                  {"{"}componentToShow === "one" && &lt;MessageOne/&gt; {"}"}
                </span>
                <br />
                // style to your liking
              </span>
            </p>
          </div>
        </section>

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
