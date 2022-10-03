import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import user from '../../assets/images/temp/user.jpg'
import bell from "../../assets/images/temp/bell.png"
import logo from "../../assets/images/temp/logo.svg";
import UserData from '../../components/UserData';

const ContactHeader = () => {
    useEffect(() => {
        if (document.querySelectorAll('.top-nav-header ul.navbar-nav li.nav-item a').length > 0) {
            document.querySelectorAll('.top-nav-header ul.navbar-nav li.nav-item a').forEach(item => {
                var curr = window.location.pathname;
                var currActive = item.getAttribute("href");
                if (curr == currActive) {
                    document.querySelectorAll('.top-nav-header ul.navbar-nav li.nav-item a').forEach(item => {
                        item.classList.remove('active');
                    });
                    item.classList.add('active');
                }
            })
        }
    }, [])
    return (

        <>
            <header className="ps-lg-3 pe-lg-4 px-3 main-header mt-lg-2">
                <div className="row gx-sm-3 gx-1 align-items-center justify-content-between">
                    <div className="col-auto d-lg-none">
                        <i id="mobileMenuBtn" className="fa-solid fa-bars cursor-pe"></i>
                    </div>
                    <div className="col-6 col-sm">
                        <nav className="navbar navbar-expand-xl">
                            <div className="d-xl-none d-flex align-items-center">
                                <img src={logo} className="img-fluid flex-shrink-0 logo-img ms-3 d-lg-none"
                                    alt="Logo" />
                                <button
                                    className="navbar-toggler border-0 p-0 bg-primary d-flex align-items-center justify-content-center text-white rounded ms-1 ms-lg-0"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="fa-solid fa-xs fa-ellipsis-vertical"></i>
                                </button>
                            </div>
                            <div className="collapse top-nav-header navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav justify-content-between w-100 mb-2 mb-0">
                                    <li className="nav-item">
                                        <Link to={"/contact"} className="nav-link active">Contacts</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/campaign"} className="nav-link">Smart Lists / Campaign </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/contact-requests'} className="nav-link">Contact Requests</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/bulk-actions'} className="nav-link">Bulk Actions</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'#restore'} className="nav-link">Restore</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <UserData />
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default ContactHeader