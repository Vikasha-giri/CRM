import React from 'react'

const OpportunityModal = () => {
    return (
        <div className="modal fade" id="updateOpportunityModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="updateOpportunityLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content rounded-4">
                    <div className="modal-body p-lg-5 p-md-4">
                        <div className="d-flex align-items-center justify-content-between">
                            <h5 className="modal-title h4" id="updateOpportunityLabel">Add/update Opportunity</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <hr />
                        <div className="px-xxl-4 px-lg-3">
                            <h4 className="my-md-4 my-3 py-lg-2 py-xxl-3">Apply opportunity to following contacts</h4>
                            <form className="row">
                                <div className="col-lg-6">
                                    <div className="mb-3 mb-xl-4 pb-md-2">
                                        <label htmlFor="select_pipeline" className="form-label">Select Pipeline</label>
                                        <select className="form-select">
                                            <option selected>-Select-</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3 mb-xl-4 pb-md-2">
                                        <label htmlFor="select_stage" className="form-label">Select Stage</label>
                                        <select className="form-select">
                                            <option selected>-Select-</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3 mb-xl-4 pb-md-2">
                                        <label htmlFor="opportunity_name" className="form-label">Opportunity Name</label>
                                        <input type="text" className="form-control" placeholder="Opportunity Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3 mb-xl-4 pb-md-2">
                                        <label htmlFor="opportunity_source" className="form-label">Opportunity Source</label>
                                        <input type="text" className="form-control" placeholder="Opportunity Source" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3 mb-xl-4 pb-md-2">
                                        <label htmlFor="lead_value" className="form-label">Lead Value</label>
                                        <select className="form-select">
                                            <option selected>-Select-</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3 mb-xl-4 pb-md-2">
                                        <label htmlFor="opportunity_status" className="form-label">Opportunity Status</label>
                                        <select className="form-select">
                                            <option selected>-Select-</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mb-3 mb-xl-4 pb-md-2">
                                        <label htmlFor="action" className="form-label">Opportunity Source</label>
                                        <textarea className="form-control"
                                            placeholder="Enter a description for the action (to be shown in tracking report)"
                                            rows="6"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-sm-end">
                                    <ul className="list-inline mb-0 mt-lg-4 mt-3 pt-xl-2">
                                        <li className="list-inline-item me-xl-3">
                                            <button type="button" className="btn  btn-outline-primary btn-small" data-bs-dismiss="modal"
                                                aria-label="Close">Cancel</button>
                                        </li>
                                        <li className="list-inline-item">
                                            <button type="button" className="btn btn-primary px-4">Add/Update Opportunity </button>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpportunityModal