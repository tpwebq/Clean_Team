import {Link} from "react-router-dom";

function Nabvar(props){
    return(        
        <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/" className="navbar-brand">
                <img className="navbar-logo" src="img/navbar_logo.png" alt="logo"/>
            </Link>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#main-nav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main-nav">
                <ul className="navbar-nav ms-auto text-end text-uppercase">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/basket" className="nav-link">Basket</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nabvar;