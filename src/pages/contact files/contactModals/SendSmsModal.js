import React from 'react'

const SendSmsModal = () => {
    return (
        <div className="modal fade" id="sendSMSModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="sendSMSLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content rounded-4">
                    <div className="modal-body p-lg-5 p-md-4">
                        <div className="d-flex align-items-center justify-content-between">
                            <h5 className="modal-title h4" id="sendSMSLabel">Send SMS</h5>
                            <button type="button" className="btn-close text-primary" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <hr />
                            <div className="px-xxl-4 px-lg-3">
                                <h4 className="mt-md-4 mt-3 pt-lg-2 pt-xxl-3 mb-3">Send sms to following contacts</h4>
                                <div
                                    className="d-flex bg-success align-items-center justify-content-center text-uppercase wh-40 text-white rounded-circle mb-xl-5 mb-4">
                                    d
                                </div>
                                <div className="bg-light rounded text-primary p-3 ff-primary fw-medium">
                                    <div className="d-flex justify-content-start">
                                        <i className="fa-solid fa-triangle-exclamation fa-xl mt-3 me-xl-3 me-2"></i>
                                        <span>Please note The actions will be performed over a period of time. You can track the
                                            progress on the bulk actions page.</span>
                                    </div>
                                </div>
                                <div className="text-sm-end">
                                    <ul className="list-inline mb-0 mt-4 mt-3 pt-1 pt-xl-2">
                                        <li className="list-inline-item me-xl-3">
                                            <button type="button" className="btn  btn-outline-primary btn-small" data-bs-dismiss="modal"
                                                aria-label="Close">Cancel</button>
                                        </li>
                                        <li className="list-inline-item">
                                            <button type="button" className="btn btn-primary btn-small">Ok, proceed</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendSmsModal