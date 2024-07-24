import {Link, Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
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

            </ul>
        </nav>
        <Outlet/>
        </>
    );
}

export default Layout;
