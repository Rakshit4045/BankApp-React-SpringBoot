
export default function Footer() {
  return (
    <footer className="text-center bg-warning text-lg-start text-black">
        <section className="pt-1">
            <div className="container text-left text-md-start mt-5">
                <div className="row mt-2">
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4 font-weight-bold">
                        Bank Statement
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">Mini Statement</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Customized Statement</a>
                    </p>
                    </div>
                </div>
            </div>
        </section>
        <div className="bg-warning">
            <div className="footer-content py-3 navbar navbar-expand-sm text-align-left">
                <a href="#home" className='text-decoration-none text-dark footer-logo'>RS Bank</a>
                <ul>
                    <li className="list-inline-item social-icons"> <a href="#home"> <i className="bi bi-facebook"> </i> </a> </li>
                    <li className="list-inline-item social-icons"> <a href="#home"> <i className="bi bi-instagram"> </i> </a> </li>
                    <li className="list-inline-item social-icons"> <a href="#home"> <i className="bi bi-twitter"> </i> </a> </li>
                    <li className="list-inline-item social-icons"> <a href="#home"> <i className="bi bi-linkedin"> </i> </a> </li>
                </ul>
                <div style={{"width":"33%"}}>
                    © 2022 Copyright, RS Bank
                </div>
            </div>
        </div>
    </footer>
  )
}
