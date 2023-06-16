import { useState } from "react";
import LightningIcon from "./lightningIcon";
import "../App.css";

export default function ActiveSection() {
  const [active, setActive] = useState(0);

  // on click, set active variable to an index value
  const handleClick = (index) => {
    setActive(index);
  };

  // array of messages that will be presented to user
  const messages = [
    "This is the message for tab 1",
    "This is the message for tab 2",
    "This is the message for tab 3",
  ];

  return (
    <>
      <section className="state">
        <div className="description-container-one">
          <h2 className="description-title-dark">
            Active &nbsp;
            <LightningIcon />
          </h2>
          <p className="description">
            <span>
              This method uses state to make a button active and show a message
              based off which button is active
            </span>
            <br />
          </p>

          {/* this code will be hidden until user hovers over description-container-one */}
          <p>
            <span className="hidden">
              {"//"} initialize state variable to 0
              <br />
              <span className="code-example">
                const [active, setActive] = useState(0);
              </span>
              <br />
              {"//"} onClick, set state variable to index
              <br />
              <span className="code-example">
                const handleClick = (index) =&gt; {"{"}
                setActive(index)
                {"}"};
              </span>
              <br />
              {"//"} set className = "active-button" if active index ===
              handleClick(index)
              <br />
              <span className="code-example">
                className={"{"}
                active === 1 ? "active-button" : ""
                {"}"}
              </span>
              <br />
              {"//"} style to your liking
            </span>
          </p>
        </div>

        <div className="tabs-container-one">
          <div className="button-container">
            <button
              // onClick "active" variable will now have a value of 1
              onClick={() => handleClick(1)}

              // if active value is 1, class name will be "active-button left button", else it will have a class of "left-button" for styling
              className={
                active === 1 ? "active-button left-button" : "left-button"
              }
            >
              Tab 1
            </button>
            <button
              onClick={() => handleClick(2)}
              className={
                active === 2 ? "active-button middle-button" : "middle-button"
              }
            >
              Tab 2
            </button>
            <button
              onClick={() => handleClick(3)}
              className={
                active === 3 ? "active-button right-button" : "right-button"
              }
            >
              Tab 3
            </button>
          </div>
          <div className="message-box message-box-dark">
            <p>
                {/* display message from messages array at the index of active minus 1... if active === 1, it will retrieve 0 index of array (message one) */}
              {messages[active - 1] ||
            //   Or will display this message
                "Click on the tabs to see different messages using the active method"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
