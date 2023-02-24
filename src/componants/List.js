import React from "react"
import Card from "./Card"
// import { UserContext } from "./context/user"
// will need data from state, iterate over that data and create <Card /> components for each entry

const List = ({users}) => {
    // const users = useContext(UserContext)
    // const [user, setUser]
    console.log("hello from list")
    // console.log(JSON.stringify(user))
    // console.log(users)
    // Create users, map, and store invariable
    const userCards = users.map(user => <Card key={user.id} user={user}/>)
    return (
        <div>
            <h1>List Component</h1>
            {/* <h5>try stringify here</h5> */}
            {/* <h5>{JSON.stringify(user)}</h5> */}
            <ul>
                {userCards}
            </ul>
        </div>
    )
}

export default List