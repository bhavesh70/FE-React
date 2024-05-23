import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
    const {loggedUser} = useContext(UserContext)
    return (<div className="about">
        <h1>About Us</h1>
        <p>Hello everyOne this is my first react app that i am building during my learning period means internship duration at momentum ventures !
        </p>
        <div>Hello User: {loggedUser}</div>
    </div>)
}

export default About;