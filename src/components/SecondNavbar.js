import {Link} from "react-router-dom";
import Navbar from "./navbar";
const SecondNavbar = () => {
    return (
        <div className="SecondNavbar">
        <Navbar/>
        <Link to="/work/platon">platon</Link>
        <Link to="/work/solane">solane</Link>
        <Link to="/work/sedal">sedal</Link>
</div>
      );
}
export default SecondNavbar;