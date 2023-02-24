import React, { useContext } from "react"
import Card from "./Card"
import { UserContext } from "./context/user"
// will need data from state, iterate over that data and create <Card /> components for each entry

const List = () => {
    const user = useContext(UserContext)
    console.log("hello from list")
    console.log(user)
    // console.log({users})
    return (
        <div>
            <h1>List Component</h1>
            <ul>
                {/* here we will use data from state or props and iterate over it all and create a card component for each entry */}
                <Card />
            </ul>
        </div>
    )
}

export default List