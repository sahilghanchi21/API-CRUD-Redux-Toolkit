import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/icons/redux-icon.svg"
import crud from "../../assets/icons/crud2-removebg-preview.png"
import { useSelector } from 'react-redux';

const Navbar = () => {
    const count = useSelector(((state) => state.app.users.data));
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={logo} alt='logo' style={{ height: "40px", marginLeft: "20px", marginRight: "20px" }} />
                        <img src={crud} alt='logo' style={{ height: "80px" }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <form>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/view">
                                        <button type="button" class="btn btn-primary position-relative">
                                            ALL POSTS
                                            <span class="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                                                {count?.length ? count?.length : " 0 "}
                                            </span>
                                        </button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/create">
                                        <button type="button" class="btn btn-success">CREATE</button></Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;
