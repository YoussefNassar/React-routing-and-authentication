import {Link} from "react-router-dom";

function Layout(props) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/firstpage">Page1</Link>
                </li>
                <li>
                    <Link to="/secondpage">Page2</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Layout;
