import ActiveSection from "./components/activeSection";
import RenderSection from "./components/renderSection";
import LocalStorageSection from "./components/localStorageSection";
import "./App.css";

export default function App() {

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

        <LocalStorageSection/>
      </main>
    </>
  );
}
