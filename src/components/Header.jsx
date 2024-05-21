import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Navbar = () => {
const status = useOnlineStatus();

console.log("onna",status);
let st;
if(status) 
    st = "online"
 else 
    st = "offline"

   return (
<div className="nav-bar flex justify-between items-center bg-green-200 mb-10 text-xl shadow-md">
    <div className="logo flex items-center w-[70px] h-[70px]">
        <img src={logo} alt="Logo" />
    </div>

      <h2 className="text-xl font-serif font-medium">{st}</h2>
          <ul className="navbar flex text-base font-serif space-x-4 font-medium">
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/career">career</Link></li>
            <li><Link to="/contact">contact us</Link></li>
          </ul>
        </div>
      );
}


export default Navbar;