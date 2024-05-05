import {Routes, Route} from "react-router-dom";
import Home from './components/home/home'
import LoginForm from './components/login/login'
import PlantList from './components/plant-list/plant-list'
import AddPlant from './components/add-plant/add-plant'
function App() {
  return (
    <>
    <Routes >
      <Route path="/" element={ <LoginForm /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/plant-list" element={ <PlantList /> } />
      <Route path="/add-plant" element={ <AddPlant /> } />

    </Routes>
    </>
  );
}

export default App;