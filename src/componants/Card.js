import React from "react"
// import { UserContext } from "./context/user"
// will require some sort of user state data (assmuing exercise data will come with the association)
const Card = ({user}) => {
    // import context and store in variable
    // const data = useContext(UserContext)
    const { name, exercises } = user
console.log(exercises)

    const exercisesList = user.exercises.map(exercise => <li>
        Name: {exercise.name},<br></br>
        Muscle Group: {exercise.muscle_group},<br></br>
        Weight: {exercise.weight},<br></br>
        Sets: {exercise.sets}, <br></br>
        Reps: {exercise.reps},<br></br>
        Rest: {exercise.rest}
        </li>)
    console.log("inside Card")
    // console.log(user)
    return (
        <div className="Card">
            <h1>User Name:</h1>
            <h2>{name}</h2>
            <h3>Exercises:</h3>
            <h5>{exercisesList}</h5>
            {/* <h5>{JSON.stringify(exercises)}</h5> */}
        </div>
    )
}

export default Card