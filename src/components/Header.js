import React from 'react'
import logo from "../assets/images/temp/logo.svg";
import UserData from './UserData';

const Header = () => {
    return (
        <header className="ps-lg-3 pe-lg-4 px-3 main-header mt-lg-2">
            <div className="row gx-sm-3 gx-1 align-items-center justify-content-between">
                <div className="col-auto d-lg-none">
                    <i id="mobileMenuBtn" className="fa-solid fa-bars cursor-pe"></i>
                </div>
                <div className="col-6 col-sm">
                    <img src={logo} className="img-fluid flex-shrink-0 logo-img ms-3 d-lg-none" alt="Logo" />
                </div>
                <UserData />
            </div>
        </header>
    )
}

export default Header