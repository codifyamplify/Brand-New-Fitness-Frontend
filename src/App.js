import React from "react"
import {Routes, Route} from 'react-router-dom'
import { UserProvider } from "./componants/context/user"
// import Card from "./componants/Card"
// not used here
import Form from './componants/Form'
import Home from './componants/Home'
import List from './componants/List'
import Navbar from './componants/Navbar'



function App() {
  console.log("inside app")
// debugger
  // create users state
  // const [users, setUsers] = useState([]) // this will be handled in context now
// debugger
  // write fetch request to 9292
  // useEffect(() => {
  //   fetch("http://localhost:9292/users")
  //     .then((resp) => resp.json())
  //     .then((users) => setUsers(users))
  // }, [])
// debugger
  // console.log("here comes the users")
  // console.log({users})


  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>words</h1>}></Route>
          <Route path='/home' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
