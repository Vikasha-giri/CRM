import React from 'react'

const AddOppo = () => {
  return (
    <>
    <div className="modal fade" id="addOpportunityModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="addOpportunityLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content rounded-4">
        <div className="modal-body p-lg-5 p-md-4">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="modal-title h4" id="addOpportunityLabel">Add Opportunity</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <hr />
          <div className="px-xxl-4 px-lg-3">
            <ul className="nav nav-pills nav-pills-custom d-flex flex-nowrap overflow-auto my-md-4 my-3 py-lg-2 py-xxl-3" id="pills-tab" role="tablist">
              <li className="nav-item me-xl-3 me-xxl-4" role="presentation">
                <button className="nav-link text-nowrap active" id="pills-opportunity-tab" data-bs-toggle="pill" data-bs-target="#pills-opportunity" type="button" role="tab" aria-controls="pills-opportunity" aria-selected="true">Opportunity</button>
              </li>
              <li className="nav-item me-xl-3 me-xxl-4" role="presentation">
                <button className="nav-link text-nowrap" id="pills-appointment-tab" data-bs-toggle="pill" data-bs-target="#pills-appointment" type="button" role="tab" aria-controls="pills-appointment" aria-selected="false">Book/Update Appointment</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link text-nowrap" id="pills-tasks-tab" data-bs-toggle="pill" data-bs-target="#pills-tasks" type="button" role="tab" aria-controls="pills-tasks" aria-selected="false">Tasks</button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-opportunity" role="tabpanel" aria-labelledby="pills-opportunity-tab" tabindex="0">
                <form className="row">
                  <div className="col-lg-12">
                    <h4 className="mt-lg-2 mb-lg-4 mb-3 pb-md-1">Contact Info</h4>
                    <div className="mb-3 mb-xl-4 pb-md-2">
                      <label for="contact_name" className="form-label">Contact Name</label>
                      <input type="text" className="form-control" placeholder="Contact Name"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                      <label for="email" className="form-label">Email</label>
                      <input type="email" className="form-control" required placeholder="ko@buuge.net"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                      <label for="phone" className="form-label">Phone Number*</label>
                      <input id="phone" className="form-control" placeholder="Phone Number" name="phone" type="tel" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                      <label for="tags" className="form-label">Tags</label>
                      <input type="text" className="form-control" placeholder="Add Tags"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                      <label for="company_name" className="form-label">Company Name</label>
                      <input type="text" className="form-control" placeholder="Company Name"/>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <h4 className="pt-lg-3 pt-2 mb-lg-4 mb-3 pb-md-1">Opportunity Info</h4>
                    <div className="mb-3 mb-xl-4 pb-md-2">
                      <label for="opportunity_name" className="form-label">Opportunity Name</label>
                      <input type="text" className="form-control" placeholder="Opportunity Name"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                      <label for="select_pipeline" className="form-label">Select Pipeline</label>
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
                      <label for="select_stage" className="form-label">Select Stage</label>
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
                      <label for="status" className="form-label">Status</label>
                      <select className="form-select">
                        <option selected>-Select-</option>
                        <option value="1">Open</option>
                        <option value="2">Close</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                      <label for="lead_value" className="form-label">Lead Value</label>
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0" id="dollar-sign">$</span>
                        <input type="text" className="form-control border-start-0 ps-0" placeholder="Lead Value" aria-describedby="dollar-sign"/>
                      </div>
                  </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                      <label for="owner" className="form-label">Owner</label>
                      <select className="form-select">
                        <option selected>-Select-</option>
                        <option value="1">Alfred Gardner</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                      <label for="spurce" className="form-label">Spurce</label>
                      <input type="text" className="form-control" placeholder="Spurce"/>
                    </div>
                  </div>
                  <div className="col-lg-12 text-sm-end">
                    <ul className="list-inline mb-0 mt-lg-4 mt-3 pt-xl-2 d-sm-flex flex-wrap">
                      <li className="list-inline-item me-xl-auto">
                        <button type="button" className="btn btn-danger bg-danger bg-opacity-10 border-danger border border-opacity-10 text-danger btn-small">Delete</button>
                      </li>
                      <li className="list-inline-item me-xl-3">
                        <button type="button" className="btn  btn-outline-primary btn-small" data-bs-dismiss="modal"
                          aria-label="Close">Cancel</button>
                      </li>
                      <li className="list-inline-item">
                        <button type="button" className="btn btn-primary btn-small">Add </button>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
              <div className="tab-pane fade" id="pills-appointment" role="tabpanel" aria-labelledby="pills-appointment-tab" tabindex="0">
                <form>
                  <div className="py-4 px-2 position-relative text-center">
                    <input type="file" className="position-absolute cursor-pe end-0 start-0 top-0 bottom-0 h-100 w-100 opacity-0 z-index-1"/>
                    <label className="mb-0 form-label fw-normal text-opacity-50 text-dark">Add/Select a contact to schedule appointments</label>
                  </div>
                  <div className="text-sm-end">
                    <ul className="list-inline mb-0 mt-lg-4 mt-3 pt-xl-2 d-sm-flex flex-wrap">
                      <li className="list-inline-item me-xl-auto">
                        <button type="button" className="btn btn-danger bg-danger bg-opacity-10 border-danger border border-opacity-10 text-danger btn-small">Delete</button>
                      </li>
                      <li className="list-inline-item me-xl-3">
                        <button type="button" className="btn  btn-outline-primary btn-small" data-bs-dismiss="modal"
                          aria-label="Close">Cancel</button>
                      </li>
                      <li className="list-inline-item">
                        <button type="button" className="btn btn-primary btn-small">Add </button>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
              <div className="tab-pane fade" id="pills-tasks" role="tabpanel" aria-labelledby="pills-tasks-tab" tabindex="0">
                <form className="row">
                  <div className="col-lg-12">
                      <div className="mb-3 mb-xl-4 pb-md-2">
                        <label for="tags" className="form-label">Tags</label>
                        <input type="text" className="form-control" placeholder="Add Tags"/>
                      </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                      <label for="description" className="form-label">Description</label>
                      <textarea className="form-control" placeholder="Task Description" rows="6"></textarea>
                    </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3 mb-xl-4 pb-md-2">
                    <label for="select_pipeline" className="form-label">Assign To</label>
                    <select className="form-select">
                      <option selected>Not assigned</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                  <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                      <label for="due_date" className="form-label">Due Date</label>
                      <input type="text" className="form-control bg-light border-light border-opacity-50 bg-opacity-50" value="Wed, Mar 2nd" readonly placeholder="Due Date"/>
                    </div>
                  </div>
                  <div className="col-lg-12 text-sm-end">
                    <ul className="list-inline mb-0 mt-lg-4 mt-3 pt-xl-2 d-sm-flex flex-wrap">
                      <li className="list-inline-item me-xl-auto">
                        <button type="button" className="btn btn-danger bg-danger bg-opacity-10 border-danger border border-opacity-10 text-danger btn-small">Delete</button>
                      </li>
                      <li className="list-inline-item me-xl-3">
                        <button type="button" className="btn  btn-outline-primary btn-small" data-bs-dismiss="modal"
                          aria-label="Close">Cancel</button>
                      </li>
                      <li className="list-inline-item">
                        <button type="button" className="btn btn-primary btn-small">Add </button>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default AddOppo