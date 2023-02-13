import './Footer.css';

export default function Footer(){
    return(
        <footer className="bg-warning">
            <div className="footer-content py-3 navbar navbar-expand-sm text-align-center">
                <a href="#home" className='text-decoration-none text-dark footer-logo'>RS Bank</a>
                <ul>
                    <li className="list-inline-item social-icons"> <a href="#home"> <i className="bi bi-facebook"> </i> </a> </li>
                    <li className="list-inline-item social-icons"> <a href="#home"> <i className="bi bi-instagram"> </i> </a> </li>
                    <li className="list-inline-item social-icons"> <a href="#home"> <i className="bi bi-twitter"> </i> </a> </li>
                    <li className="list-inline-item social-icons"> <a href="#home"> <i className="bi bi-linkedin"> </i> </a> </li>
                </ul>
                <ul>
                    <li className="list-inline-item nav-links"> <a href="#home"> Home </a> </li>
                    <li className="list-inline-item nav-links"> <a href="#services"> Services </a> </li>
                    <li className="list-inline-item nav-links"> <a href="#contactus"> Contact Us </a> </li>
                </ul>
            </div>
        </footer>
    )
}