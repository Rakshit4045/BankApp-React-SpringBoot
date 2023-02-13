import {Link} from 'react-router-dom';
import './Header.css'

export default function Header(){
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-warning">
            <a className="navbar-brand" href="#home">RS Bank</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto font-weight-bold">
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#home">Home
                        </a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#contactus">Contact Us</a>
                    </li>
                </ul>
                <Link to={"/login"}>
                    <button className="btn btn-primary px-3 login-btn">
                        Login
                    </button>
                </Link>
            </div>
        </nav>
    );
}