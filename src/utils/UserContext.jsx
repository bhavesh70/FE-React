import { createContext } from "react";

const UserContext = createContext({
    loggedUser : "No User"
})

export default UserContext