import React from 'react';
import { Link } from "react-router-dom"
const Login = () => {
    return (
        <section className="Login bg-primary vh-100 overflow-hidden">
            <div className="h-100 overflow-auto login-content position-relative overflow-auto z-index-2">
                <div className="row g-0 px-xl-6 px-md-5 px-4 py-3 align-items-center h-100 justify-content-end me-xl-6">
                    <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9">
                        <div className="card border-0 rounded-5">
                            <div className="card-body p-xl-5 p-4">
                                <h1 className="text-center h2 fw-semibold mb-lg-5 mb-4">Sign into your account</h1>
                                <form>
                                    <div className="mb-3 mb-lg-4 pb-2">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="email" className="form-control form-control-lg" id="email" placeholder="Your email address" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" className="form-control form-control-lg" id="password" placeholder="The password you picked" />
                                    </div>
                                    <div className="text-end">
                                        <a href="#" className="ff-primary fw-medium">Forgot Password</a>
                                    </div>
                                    <div className="text-center mt-xl-5 mt-4 mb-lg-4 mb-3 pb-2">
                                        <Link to="/launchpad"> <button type="submit" className="btn btn-primary btn-lg btn-md">Sign In</button></Link>
                                    </div>
                                    <p className="text-center small">By signing in you agree to our <a href="#" className="ff-primary fw-medium">Terms and Conditions</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login