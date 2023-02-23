import React, {useEffect, useState} from "react"
import {Routes, Route} from 'react-router-dom'
// import Card from "./componants/Card"
// not used here
import Form from './componants/Form'
import Home from './componants/Home'
import List from './componants/List'
import Navbar from './componants/Navbar'


function App() {
  console.log("hello from app")

  // create users state
  const [users, setUsers] = useState([])

  // write fetch request to 9292
  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((resp) => resp.json())
      .then((users) => console.log(users))
  }, [])
  
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <Home /> */}
      {/* <List /> */}
      {/* <Navbar /> */}
      {/* <Card /> */}
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
