import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainLayout from "./components/MainLayout";

function App() {
  const [sidebarSwitch, setSidebarSwitch] = useState(false);

  const sideBarToggler = () => {
    setSidebarSwitch((prevState) => {
      return prevState ? false : true;
    });
  };
  return (
    <div className="App">
      {sidebarSwitch && (
        <div className="backdrop" onClick={sideBarToggler}></div>
      )}
      {/*Sidebar*/}
      <Sidebar sidebarState={sidebarSwitch} />

      {/*MainLayout*/}
      <MainLayout sideBarTogglerHandle={sideBarToggler} />
    </div>
  );
}

export default App;
