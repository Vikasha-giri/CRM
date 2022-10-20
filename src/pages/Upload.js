import React, { useEffect } from 'react'
import $ from 'jquery';
import Header from '../components/Header';

const UploadList = () => {
    return (
        <>
            <div className="content-wrapper">
                <Header />
                <main className="container-fluid py-3 ps-lg-3 pe-lg-4 px-3">
                    <div className="row g-0 justify-content-center">
                        <div className="col-xxl-10 col-xl-11">
                            <div className="card border-0 shadow rounded-5">
                                <div className="card-body p-xl-6 p-md-5 p-4">
                                    <h1 className="h2 mb-lg-4 mb-3 pb-xl-2">Upload List</h1>
                                    <form className="row gx-xxl-5 gx-xl-4">
                                        <div className="col-lg-6">
                                            <div className="mb-3 mb-xl-4 pb-md-2">
                                                <label htmlFor="full_name" className="form-label">Full Name*</label>
                                                <input type="text" className="form-control form-control-lg" placeholder="Full Name" required />
                                            </div>
                                            <div className="mb-3 mb-xl-4 pb-md-2">
                                                <label htmlFor="phone" className="form-label">Phone Number*</label>
                                                <input id="phone" className="form-control form-control-lg" placeholder="Phone Number" name="phone" type="tel" />
                                            </div>
                                            <div className="mb-3 mb-xl-4 pb-md-2">
                                                <label htmlFor="email" className="form-label">Email*</label>
                                                <input type="email" className="form-control form-control-lg" required placeholder="Email" />
                                            </div>
                                            <div className="mb-3 mb-xl-4 pb-md-2">
                                                <label htmlFor="branch_manager" className="form-label">Who is the branch manager</label>
                                                <input type="text" className="form-control form-control-lg" placeholder="Who is the branch manager" />
                                            </div>
                                            <div className="mb-3 mb-xl-4 pb-md-2">
                                                <h5 className="mb-3 pt-1 mb-xl-4 pt-xl-2">What Type of list is this?*</h5>
                                                <div className="form-check form-check-lg mb-2 mb-xl-3">
                                                    <input className="form-check-input" type="checkbox" id="cb1" />
                                                    <label className="form-check-label ms-1" htmlFor="cb1">
                                                        Past Clients
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-lg mb-2 mb-xl-3">
                                                    <input className="form-check-input" type="checkbox" id="cb2" />
                                                    <label className="form-check-label ms-1" htmlFor="cb2">
                                                        Refinance Leads
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-lg mb-2 mb-xl-3">
                                                    <input className="form-check-input" type="checkbox" id="cb3" />
                                                    <label className="form-check-label ms-1" htmlFor="cb3">
                                                        Past Clients
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-lg mb-2 mb-xl-3">
                                                    <input className="form-check-input" type="checkbox" id="cb4" />
                                                    <label className="form-check-label ms-1" htmlFor="cb4">
                                                        Refinance Leads
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mb-3 mb-xl-4 pb-md-2">
                                                <label htmlFor="notes" className="form-label">Notes</label>
                                                <textarea className="form-control form-control-lg" placeholder="Enter here" rows="6"></textarea>
                                            </div>
                                            <p className="text-primary ff-primary fw-medium">Be Sure To Double Check that Your Lists Have
                                                Phone Numbers Before Submitting!</p>
                                        </div>
                                        <div className="col-lg-6">
                                            <h5 className="mb-3">File Upload*</h5>
                                            <div className="bg-light bg-opacity-50 border-2 border border-dotted py-5 py-xl-6 px-2 position-relative text-center rounded-3">
                                                <input type="file" className="position-absolute cursor-pe end-0 start-0 top-0 bottom-0 h-100 w-100 opacity-0 z-index-1" />
                                                <i className="fa-solid fa-cloud-arrow-up fa-3x text-opacity-25 text-dark"></i>
                                                <h6 className="text-opacity-50 text-dark fw-bold my-2">DRAG &amp; DROP</h6>
                                                <label className="mb-0 form-label fw-normal text-opacity-50 text-dark">your files to assets, or <span className="fw-medium text-primary">browse</span></label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-sm-end">
                                            <ul className="list-inline mb-0 mt-lg-4 mt-3 pt-xl-2">
                                                <li className="list-inline-item me-xl-3">
                                                    <button type="button" className="btn btn-lg btn-outline-primary btn-small" data-bs-dismiss="modal"
                                                        aria-label="Close">Cancel</button>
                                                </li>
                                                <li className="list-inline-item">
                                                    <button type="button" className="btn btn-lg btn-primary btn-small">Add</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default UploadList