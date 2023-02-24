import React, {useContext} from "react"
import { UserContext } from "./context/user"
// will require some sort of user state data (assmuing exercise data will come with the association)
const Card = () => {
    // import context and store in variable
    const data = useContext(UserContext)
    console.log("inside Card")
    console.log(data)
    return (
        <div>
            <h1>This is a user card</h1>
            <h2>USER NAME STATE</h2>
            <h3>USER EXERCISES STATE</h3>
            <h4>maybe will have to iterate over exercises array (inside card component) to list them all</h4>
            <h4>will need an unordered list for this</h4>
            <h5>{JSON.stringify(data)}</h5>
        </div>
    )
}

export default Card