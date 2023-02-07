import {BrowserRouter, Routes,Route} from "react-router-dom";
import './App.css'
import Home from "../components/home";
import Work from "../components/work";
import About from "../components/about";
import Platon from "../pages/platon";
import Solane from "../pages/solane";
import Sedal from "../pages/sedal";
function App() {
   return (
       <div className="App">
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/works" element={<Work />} />
     <Route path={'/about'} element={<About/>} />
     <Route path="/work/platon" element={<Platon />} />
     <Route path="/work/solane" element={<Solane />} />
     <Route path="/work/sedal" element={<Sedal />} />
   </Routes></BrowserRouter>
       </div>
   );
}

export default App