import React, {useState, useEffect} from "react";

const UserContext = React.createContext()

function UserProvider({children}){
    const [data, setData] = useState([])

      useEffect(() => {
        fetch("http://localhost:9292/users")
            .then((resp) => resp.json())
            .then((data) => setData(data))
        }, [])
console.log("inside user context file")
console.log(data)
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export {UserContext, UserProvider}