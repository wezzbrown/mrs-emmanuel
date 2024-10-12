import "./App.css";
// import PropsClass from "./components/props";
import Navbar from "./components/Navbar";
import Gallary from "./components/Gallary";

function App() {
  return ( 
  <div className="mheader">
    {/* <PropsClass firstname="wisdom" lastname="sunday" /> */}
    <Navbar />
    <Gallary />
  </div>
  );
}

export default App;
