import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-white text-dark py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <nav className="d-flex">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="#">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="#">Privacy Policy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="#">Terms of Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="#">Support</Link>
            </li>
          </ul>
        </nav>
        <div className="text-center">
          © 2024 Chat Hub. Built with ❤️ for seamless conversations.
        </div>
        {/* <div>
          Follow us on 
          <Link className="text-light mx-1" to="#"> Twitter </Link> | 
          <Link className="text-light mx-1" to="#"> LinkedIn </Link>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;