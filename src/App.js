
import {Routes, Route} from 'react-router-dom'
import Card from "./componants/Card"
import Form from './componants/Form'
import Home from './componants/Home'
import List from './componants/List'
import Navbar from './componants/Navbar'


function App() {
  
  return (
    <div className="App">
      <Form />
      <Home />
      <List />
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
