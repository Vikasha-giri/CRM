import React from 'react';
import download_our_app from "../assets/download_our_app.png";
import google from "../assets/google-business-seeklogo.png";
import facebook from "../assets/facebook-logo.png";
import chat from "../assets/chat-svgrepo-com.png";
import Stripe_Logo from "../assets/Stripe_Logo,_revised_2016.png";
import Header from '../components/Header';


const Launchpad = () => {
    return (
        <>
            <div className="content-wrapper">
                <Header />
                <main className="container-fluid py-3 ps-lg-3 pe-lg-4 px-3">
                    <div className="card border-0 shadow rounded-5">
                        <div className="card-body p-xl-6 p-md-5 p-4">
                            <h1 className="text-center h2 mb-lg-4 mb-3 pb-xl-2">Let’s get you on the path to success</h1>
                            <ul className="list-group list-group-flush shadow rounded-4 position-relative overflow-hidden">
                                <li className="list-group-item p-lg-4 p-sm-3">
                                    <div className="row gx-2 align-items-center">
                                        <div className="col-sm-auto w-9">
                                            <img src={download_our_app} className="img-fluid d-block mx-sm-auto" alt="image" />
                                        </div>
                                        <div className="col-sm">
                                            <div className="d-md-flex align-items-center justify-content-between">
                                                <div className="w-100 lead fw-normal me-sm-3 me-md-4 my-md-0 mb-3 mt-2">
                                                    Download our app and engage with your leads on the go!
                                                </div>
                                                <button type="button" className="btn btn-primary btn-small">send Link</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item p-lg-4 p-sm-3">
                                    <div className="row gx-2 align-items-center">
                                        <div className="col-sm-auto w-9">
                                            <img src={google} className="img-fluid d-block mx-sm-auto" alt="image" />
                                        </div>
                                        <div className="col-sm">
                                            <div className="d-md-flex align-items-center justify-content-between">
                                                <div className="w-100 lead fw-normal me-sm-3 me-md-4 my-md-0 mb-3 mt-2">
                                                    Generate more leads htmlForm Google My Business
                                                    Monitor and reply to GMB conversation & reviews.
                                                </div>
                                                <button type="button" className="btn btn-primary btn-small">connect</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item p-lg-4 p-sm-3">
                                    <div className="row gx-2 align-items-center">
                                        <div className="col-sm-auto w-9">
                                            <img src={facebook} className="img-fluid d-block mx-sm-auto" alt="image" />
                                        </div>
                                        <div className="col-sm">
                                            <div className="d-md-flex align-items-center justify-content-between">
                                                <div className="w-100 lead fw-normal me-sm-3 me-md-4 my-md-0 mb-3 mt-2">
                                                    Connect directly with prospects and customers via
                                                    Messenger in Conversation and sync your Facebook
                                                    leads woth our CRM.
                                                </div>
                                                <button type="button" className="btn btn-primary btn-small">connect</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item p-lg-4 p-sm-3">
                                    <div className="row gx-2 align-items-center">
                                        <div className="col-sm-auto w-9">
                                            <img src={chat} className="img-fluid d-block mx-sm-auto" alt="image" />
                                        </div>
                                        <div className="col-sm">
                                            <div className="d-md-flex align-items-center justify-content-between">
                                                <div className="w-100 lead fw-normal me-sm-3 me-md-4 my-md-0 mb-3 mt-2">
                                                    Generate leads htmlForm your website by connecting
                                                    webchat widget
                                                </div>
                                                <button type="button" className="btn btn-primary btn-small">connect</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item p-lg-4 p-sm-3">
                                    <div className="row gx-2 align-items-center">
                                        <div className="col-sm-auto w-9">
                                            <img src={Stripe_Logo} className="img-fluid d-block mx-sm-auto" alt="image" />
                                        </div>
                                        <div className="col-sm">
                                            <div className="d-md-flex align-items-center justify-content-between">
                                                <div className="w-100 lead fw-normal me-sm-3 me-md-4 my-md-0 mb-3 mt-2">
                                                    Connect your Stripe account to start accepting payments.
                                                    (Exting stripe API integration will continue to work, but it is advised
                                                    to use Stripe Connect htmlFor more security)
                                                </div>
                                                <button type="button" className="btn btn-primary btn-small">connect</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Launchpad