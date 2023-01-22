import './App.css';
import DistanceCalculator from './components/DistanceCalculator';
import ShipperTable from './components/ShipperTable';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import shipperData from './components/ShipperData';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<DistanceCalculator/>}></Route>
        <Route path='/distance-calculator' element={<DistanceCalculator/>}></Route>
        <Route path='/shipper-data' element={<ShipperTable shippers={shipperData}/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
   

    
  
    
  );
}

export default App;
