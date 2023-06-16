import React, {useState} from 'react'
import RenderIcon from "./renderIcon";
import MessageOne from "./messageOne";
import MessageTwo from "./messageTwo";
import MessageThree from "./messageThree";
import "../App.css";


export default function RenderSection() {
    const [componentToShow, setComponentToShow] = useState(null);
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
    return(
        <>
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
        </>
    )
}