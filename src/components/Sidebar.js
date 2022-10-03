import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import home from '../assets/images/temp/sidebar/home.svg'
import logo from '../assets/images/temp/logo.svg'

const Sidebar = () => {
    const [menuItem, setMenuItem] = useState([
        {
            path: "/launchpad",
            name: "Launchpad",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
            </svg>
        },
        {
            path: "/conversations",
            name: "Conversations",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
            </svg>
        },

        {
            path: "/contact",
            name: "Contact",
            icon: <i className="bi bi-person-badge"></i>

        },
        {
            path: "/opportunites",
            name: "Opportunites",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
            </svg>
        },
        {
            path: "/add-user",
            name: "Add Users",
            icon: <i className="bi bi-people"></i>
        },
        {
            path: "/uploadList",
            name: "Upload List",
            icon: <i className="bi bi-person-lines-fill"></i>
        },
        {
            path: "/support",
            name: "Support",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
            </svg>
        },
        {
            path: "/setting",
            name: "Settings",
            icon: <i className="bi bi-gear"></i>
        }
    ]);

    useEffect(() => {
        if (document.querySelectorAll('.nav-item.w-100 a.nav-link').length > 0) {
            document.querySelectorAll('.nav-item.w-100 a.nav-link').forEach(item => {
                item.addEventListener('click', function () {
                    document.querySelectorAll('.nav-item.w-100 a.nav-link').forEach(item => {
                        item.classList.remove('active');
                    })
                    item.classList.add('active');
                })
            })
        }
    })
    return (
        <>
            <aside className="main-sidebar bg-white rounded-5">
                <div className="brand-link px-3 pb-3 pt-4">
                    <i id="closeSidebar"
                        className="fa-solid fa-circle-xmark fa-lg text-black-50 d-lg-none position-absolute cursor-pe top-0 end-0 mt-4 me-3"></i>
                    <img src={logo} className="img-fluid logo-img mx-auto d-block pt-2" alt="Logo" />
                </div>
                <div className="px-3 sidebar-nav pt-3">
                    <select className="form-select bg-light border-light mb-3" aria-label="Default select example">
                        <option value="1">Craig Sanders…</option>
                    </select>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control bg-light border-light" placeholder="Search" aria-label="Search"
                            aria-describedby="search-icon" />
                        <span className="input-group-text bg-light border-light" id="search-icon"><i
                            className="fa-solid fa-sm fa-magnifying-glass"></i></span>
                    </div>
                    <ul className="nav d-block">
                        {
                            menuItem.map((item, index) => (
                                <li className="nav-item w-100 mb-2 pb-1" key={index}>
                                    <Link className={index == 0 ? "nav-link d-flex align-items-center active" : "nav-link d-flex align-items-center"} to={item.path}>
                                        <img className="me-2 me-xl-3 flex-shrink-0 icon-img" src={home} />
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </aside>
            <Outlet />
        </>
    )
}

export default Sidebar