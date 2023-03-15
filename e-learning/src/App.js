
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";

// import Container from 'react-bootstrap/Container';
import NAV from "./components/nav";
//import ControlledCarousel from "./components/carousel";
import DataForm from './components/Form';
import Homepage from './components/Homepage';

// All the routing done here
function App() {
  return (
    <Routes>
    <Route path="/" element={
    <div>
      {/* <Nav/>  */}
      <Homepage/>

    </div> } />
    <Route path="form" element={ <DataForm/> } />
  </Routes>
    // <div className="App">
    //   <NAV />
    //   <Homepage />
    //   {/* <ControlledCarousel /> */}
    //   <DataForm/>
    //   <footer/>
    // </div>
  )
}

export default App;
