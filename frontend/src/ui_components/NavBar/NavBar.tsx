import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <header>
        <nav>
            <ul className="flex justify-between p-2.5 bg-yellow">
                <div>
                    <li className="pl-2.5 font-bold"><Link to="/">TECH SIGHT</Link></li>
                </div>
                <div className="flex">
                    <li className="pl-2.5"><Link to="/">Home</Link></li>
                    <li className="pl-2.5"><Link to="/sign-in">Sign In</Link></li>
                    <li className="pl-2.5 pr-2.5"><Link to="/sign-up">Sign Up</Link></li>
                </div>
            </ul>
        </nav>

    </header>)
}

export default NavBar;