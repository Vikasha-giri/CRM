import React from 'react';
import user from '../assets/images/temp/user.jpg'
import bell from  "../assets/images/temp/bell.png"
import { Link } from 'react-router-dom';

const UserData = () => {
    return (
        <div className="col-5 col-sm-4 ms-auto">
            <ul className="list-inline text-center d-flex justify-content-end align-items-center mb-0">
                <li className="list-inline-item me-sm-0 px-sm-3 px-1 py-3">
                    <div className="d-flex align-items-center lh-1 justify-content-center rounded-circle bell-icon border cursor-pe">
                        <div className="position-relative">
                            <img src={bell} />
                            <span
                                className="position-absolute top-0 end-0 mt-1 me-n1 translate-middle p-1 bg-danger rounded-circle">
                                <span className="visually-hidden">New alerts</span>
                            </span>
                        </div>
                    </div>
                </li>
                <li className="list-inline-item">
                    <div className="btn-group">
                        <button
                            className="btn btn-link text-secondary p-0 text-decoration-none dropdown-toggle dropdown-arrow-none d-flex align-items-center"
                            type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={user}
                                className="rounded-circle object-fit-cover user-img flex-shrink-0 me-2" alt="logo" />
                            <span className="d-sm-block d-none ms-sm-1">Tommy Malone</span>
                            <i className="fa-solid fa-chevron-down fa-sm me-1 ms-md-2"></i>
                        </button>
                        <ul className="dropdown-menu border-0 shadow rounded-4 dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            <li><Link to={"#profile"} className="dropdown-item">Profile</Link></li>
                            <li><Link to={'/'} className="dropdown-item">Logout</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default UserData