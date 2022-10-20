import React from 'react'

const PersonalData = () => {
    return (
        <div className="tab-pane fade show active" id="pills-data" role="tabpanel"
            aria-labelledby="pills-data-tab" tabindex="0">
            <form className="row">
                <div className="col-sm-12">
                    <div className="d-sm-flex mb-xl-5 mb-md-4 mb-3">
                        <div
                            className="bg-light bg-opacity-50 rounded-4 py-5 px-6 flex-shrink-0 position-relative me-sm-3 me-xxl-5 me-md-4 text-center mb-3">
                            <input type="file"
                                className="position-absolute cursor-pe end-0 start-0 top-0 bottom-0 h-100 w-100 opacity-0 z-index-1" />
                            <i className="fa-solid fa-plus fa-2x text-dark text-opacity-50"></i>
                        </div>
                        <div>
                            <h5 className="mb-1">Personal Logo</h5>
                            <p className="text-black-50 lh-base small">The proposed size is 512x512px<br /> no
                                bigger than 2.5mb</p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <button type="button"
                                        className="btn btn-primary btn-small">Change</button>
                                </li>
                                <li className="list-inline-item">
                                    <button type="button"
                                        className="btn btn-outline-light text-dark text-opacity-50 btn-small">Remove</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                        <label htmlFor="full_name" className="form-label">Full Name*</label>
                        <input type="text" className="form-control" placeholder="Bobby" required />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                        <label htmlFor="last_name" className="form-label">Last Name*</label>
                        <input type="text" className="form-control" placeholder="Marshall" required />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                        <label htmlFor="email" className="form-label">Email*</label>
                        <input type="email" className="form-control" required placeholder="ko@buuge.net" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                        <label htmlFor="phone" className="form-label">Phone Number*</label>
                        <input id="phone" className="form-control" placeholder="Phone Number" name="phone" type="tel" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                        <label htmlFor="extension" className="form-label">Extension</label>
                        <input type="text" className="form-control" placeholder="Extension" />
                    </div>
                </div>
                <div className="col-lg-12 mt-lg-4 mt-3 pt-xl-2">
                    <button type="button" className="btn btn-primary btn-small">Next</button>
                </div>
            </form>
        </div>
    )
}

export default PersonalData