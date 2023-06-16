import HeaderSection from "./components/headerSection";
import ActiveSection from "./components/activeSection";
import RenderSection from "./components/renderSection";
import LocalStorageSection from "./components/localStorageSection";
import "./App.css";

export default function App() {

  return (
    <>
      <header>

      <HeaderSection/>
      
      </header>

      <main>

        <ActiveSection/>

        <RenderSection/>

        <LocalStorageSection/>

      </main>
    </>
  );
}
