import React from 'react'

const AddTagsModal = () => {
    return (
        <div className="modal fade" id="addTagsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="addTagsLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content rounded-4">
                    <div className="modal-body p-lg-5 p-md-4">
                        <div className="d-flex align-items-center justify-content-between">
                            <h5 className="modal-title h4" id="addTagsLabel">Add Tags</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <hr />
                        <div className="px-xxl-4 px-lg-3">
                            <h4 className="my-md-4 my-3 py-lg-2 py-xxl-3">Add tags to following contacts</h4>
                            <form>
                                <div className="mb-3 mb-xl-4 pb-md-2">
                                    <label htmlFor="select_pipeline" className="form-label">Tags*</label>
                                    <select className="form-select" required>
                                        <option selected>Add Tags</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="mb-3 mb-xl-4 pb-md-2">
                                    <label htmlFor="action" className="form-label">Action</label>
                                    <textarea className="form-control"
                                        placeholder="Enter a description for the action (to be shown in tracking report)" rows="6"></textarea>
                                </div>
                                <div className="text-sm-end">
                                    <ul className="list-inline mb-0 mt-lg-4 mt-3 pt-xl-2">
                                        <li className="list-inline-item me-xl-3">
                                            <button type="button" className="btn  btn-outline-primary btn-small" data-bs-dismiss="modal"
                                                aria-label="Close">Cancel</button>
                                        </li>
                                        <li className="list-inline-item">
                                            <button type="button" className="btn btn-primary btn-small">Add</button>
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

export default AddTagsModal