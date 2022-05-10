import './App.css';
import {Routes, Route} from "react-router-dom";
import AddCard from './AddCard';
import ShowDetails from './ShowDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AddCard/>}/>
        <Route path='showdetails' element={<ShowDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;