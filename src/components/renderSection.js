import React, { useState } from "react";
import RenderIcon from "./renderIcon";
import MessageOne from "./messageOne";
import MessageTwo from "./messageTwo";
import MessageThree from "./messageThree";
import "../App.css";

export default function RenderSection() {

  // initialize component to show variable to null
  const [componentToShow, setComponentToShow] = useState(null);

  // set componentToShow variable to the value "one"
  const showComponentOne = () => {
    setComponentToShow("one");
  };

  // set componentToShow variable to the value "two"
  const showComponentTwo = () => {
    setComponentToShow("two");
  };

  // set componentToShow variable to the value "three"
  const showComponentThree = () => {
    setComponentToShow("three");
  };
  return (
    <>
      <section className="render">
        <div className="tabs-container-two">
          <div className="button-container">
            <button
              className="left-button"
              // sets componentToShow variable to the value "one"
              onClick={showComponentOne}
            >
              Tab 1
            </button>
            <button
              className="middle-button"
              // sets componentToShow variable to the value "two"
              onClick={showComponentTwo}
            >
              Tab 2
            </button>
            <button
              className="right-button"
              // sets componentToShow variable to the value "three"
              onClick={showComponentThree}
            >
              Tab 3
            </button>
          </div>

        {/* this div will hold the actual components that render or a default message */}
          <div className="message-box message-box-light">
            {/* if componentToShow is null, render this message */}
            {componentToShow === null && (
              <p>
                Click on the tabs to see different messages using component
                rendering
              </p>
            )}

            {/* if value of componentToShow is "one", render MessageOne component from ./messageOne.js */}
            {componentToShow === "one" && <MessageOne />}

            {/* if value of componentToShow is "two", render MessageTwo component from ./messageTwo.js */}

            {componentToShow === "two" && <MessageTwo />}

            {/* if value of componentToShow is "three", render MessageThree component from ./messageThree.js */}
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
              This method uses component rendering based off of state switching
              from null to a specificed value
            </span>
          </p>

          {/* This section will be hidden until user hovers over description-container-two */}
          <p>
            <span className="hidden">
              {"//"} initialize componentToShow variable to null & import components
              <br />
              <span className="code-example span-dark">
                import MessageOne from "./components/messageOne";
                <br />
                const [componentToShow, setComponentToShow] = useState(null);
              </span>
              <br />
              {"//"} onClick, set component variable to string numeric value
              <br />
              <span className="code-example span-dark">
                const showComponentOne = () =&gt; {"{"}
                setComponentToShow("one")
                {"}"};
              </span>
              <br />
              {"//"} render component based on value of componentToShow
              <br />
              <span className="code-example span-dark">
                {"{"}componentToShow === "one" && &lt;MessageOne/&gt; {"}"}
              </span>
              <br />
              {"//"} style to your liking
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
