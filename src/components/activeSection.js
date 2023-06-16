import { useState } from "react";
import LightningIcon from "./lightningIcon"
import "../App.css";

export default function ActiveSection() {
  const [active, setActive] = useState(0);

  // this is our function for setting the index value for our "active" variable
  const handleClick = (index) => {
    setActive(index);
  };

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
    </>
  );
}
