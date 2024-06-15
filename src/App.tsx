import "./App.css";
import { Card } from "./components/Card/Card";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Card />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;