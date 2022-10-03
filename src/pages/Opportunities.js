import React, { useEffect } from 'react'
import $ from 'jquery';
import Header from '../components/Header';

const Opportunities = () => {

  useEffect(() => {
    // var input = $("#phone");
    // geoIpLookup = function (callback) {
    //   $.get('https://ipinfo.io', function () {
    //   }, "jsonp").always(function (resp) {
    //     var countryCode = (resp && resp.country) ? resp.country : "";
    //     callback(countryCode);
    //   });
    // },
    //   geoIpLookup((countryCode) => {
    //     input.intlTelInput({ initialCountry: countryCode.toLowerCase(), separateDialCode: true });
    //   })
    // input.on("countrychange", function () {
    //   console.log('dialCode ', input.intlTelInput("getSelectedCountryData").dialCode)
    //   console.log('countryCode ', input.intlTelInput("getSelectedCountryData").iso2)
    //   console.log('phoneNumber ', input.val())
    // });
    // const phoneNo = () => {
    //   input.intlTelInput("setCountry", "gb");
    //   input.intlTelInput("setNumber", "+447986129475");
    // }
  }, [])

  return (
    <>
      <div className="content-wrapper">
        <Header />
        <main class="container-fluid py-3 ps-lg-3 pe-lg-4 px-3">
          <div class="card rounded-5 border-0 shadow">
            <div class="card-body">
              <button type="button" data-bs-toggle="modal" data-bs-target="#addOpportunityModal" class="btn btn-success text-capitalize btn-small">Add new</button>
            </div>
          </div>
        </main>

        <div class="modal fade" id="addOpportunityModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="addOpportunityLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content rounded-4">
              <div class="modal-body p-lg-5 p-md-4">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="modal-title h4" id="addOpportunityLabel">Add Opportunity</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <hr />
                <div class="px-xxl-4 px-lg-3">
                  <ul class="nav nav-pills nav-pills-custom d-flex flex-nowrap overflow-auto my-md-4 my-3 py-lg-2 py-xxl-3" id="pills-tab" role="tablist">
                    <li class="nav-item me-xl-3 me-xxl-4" role="presentation">
                      <button class="nav-link text-nowrap active" id="pills-opportunity-tab" data-bs-toggle="pill" data-bs-target="#pills-opportunity" type="button" role="tab" aria-controls="pills-opportunity" aria-selected="true">Opportunity</button>
                    </li>
                    <li class="nav-item me-xl-3 me-xxl-4" role="presentation">
                      <button class="nav-link text-nowrap" id="pills-appointment-tab" data-bs-toggle="pill" data-bs-target="#pills-appointment" type="button" role="tab" aria-controls="pills-appointment" aria-selected="false">Book/Update Appointment</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link text-nowrap" id="pills-tasks-tab" data-bs-toggle="pill" data-bs-target="#pills-tasks" type="button" role="tab" aria-controls="pills-tasks" aria-selected="false">Tasks</button>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-opportunity" role="tabpanel" aria-labelledby="pills-opportunity-tab" tabindex="0">
                      <form class="row">
                        <div class="col-lg-12">
                          <h4 class="mt-lg-2 mb-lg-4 mb-3 pb-md-1">Contact Info</h4>
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="contact_name" class="form-label">Contact Name</label>
                            <input type="text" class="form-control" placeholder="Contact Name" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" required placeholder="ko@buuge.net" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="phone" class="form-label">Phone Number*</label>
                            <input id="phone" class="form-control" placeholder="Phone Number" name="phone" type="tel" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="tags" class="form-label">Tags</label>
                            <input type="text" class="form-control" placeholder="Add Tags" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="company_name" class="form-label">Company Name</label>
                            <input type="text" class="form-control" placeholder="Company Name" />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <h4 class="pt-lg-3 pt-2 mb-lg-4 mb-3 pb-md-1">Opportunity Info</h4>
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="opportunity_name" class="form-label">Opportunity Name</label>
                            <input type="text" class="form-control" placeholder="Opportunity Name" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="select_pipeline" class="form-label">Select Pipeline</label>
                            <select class="form-select">
                              <option selected>-Select-</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="select_stage" class="form-label">Select Stage</label>
                            <select class="form-select">
                              <option selected>-Select-</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="status" class="form-label">Status</label>
                            <select class="form-select">
                              <option selected>-Select-</option>
                              <option value="1">Open</option>
                              <option value="2">Close</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="lead_value" class="form-label">Lead Value</label>
                            <div class="input-group">
                              <span class="input-group-text bg-white border-end-0" id="dollar-sign">$</span>
                              <input type="text" class="form-control border-start-0 ps-0" placeholder="Lead Value" aria-describedby="dollar-sign" />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="owner" class="form-label">Owner</label>
                            <select class="form-select">
                              <option selected>-Select-</option>
                              <option value="1">Alfred Gardner</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="spurce" class="form-label">Spurce</label>
                            <input type="text" class="form-control" placeholder="Spurce" />
                          </div>
                        </div>
                        <div class="col-lg-12 text-sm-end">
                          <ul class="list-inline mb-0 mt-lg-4 mt-3 pt-xl-2 d-sm-flex flex-wrap">
                            <li class="list-inline-item me-xl-auto">
                              <button type="button" class="btn btn-danger bg-danger bg-opacity-10 border-danger border border-opacity-10 text-danger btn-small">Delete</button>
                            </li>
                            <li class="list-inline-item me-xl-3">
                              <button type="button" class="btn  btn-outline-primary btn-small" data-bs-dismiss="modal"
                                aria-label="Close">Cancel</button>
                            </li>
                            <li class="list-inline-item">
                              <button type="button" class="btn btn-primary btn-small">Add </button>
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                    <div class="tab-pane fade" id="pills-appointment" role="tabpanel" aria-labelledby="pills-appointment-tab" tabindex="0">
                      <form>
                        <div class="py-4 px-2 position-relative text-center">
                          <input type="file" class="position-absolute cursor-pe end-0 start-0 top-0 bottom-0 h-100 w-100 opacity-0 z-index-1" />
                          <label class="mb-0 form-label fw-normal text-opacity-50 text-dark">Add/Select a contact to schedule appointments</label>
                        </div>
                        <div class="text-sm-end">
                          <ul class="list-inline mb-0 mt-lg-4 mt-3 pt-xl-2 d-sm-flex flex-wrap">
                            <li class="list-inline-item me-xl-auto">
                              <button type="button" class="btn btn-danger bg-danger bg-opacity-10 border-danger border border-opacity-10 text-danger btn-small">Delete</button>
                            </li>
                            <li class="list-inline-item me-xl-3">
                              <button type="button" class="btn  btn-outline-primary btn-small" data-bs-dismiss="modal"
                                aria-label="Close">Cancel</button>
                            </li>
                            <li class="list-inline-item">
                              <button type="button" class="btn btn-primary btn-small">Add </button>
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                    <div class="tab-pane fade" id="pills-tasks" role="tabpanel" aria-labelledby="pills-tasks-tab" tabindex="0">
                      <form class="row">
                        <div class="col-lg-12">
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="tags" class="form-label">Tags</label>
                            <input type="text" class="form-control" placeholder="Add Tags" />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" placeholder="Task Description" rows="6"></textarea>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="select_pipeline" class="form-label">Assign To</label>
                            <select class="form-select">
                              <option selected>Not assigned</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3 mb-xl-4 pb-md-2">
                            <label for="due_date" class="form-label">Due Date</label>
                            <input type="text" class="form-control bg-light border-light border-opacity-50 bg-opacity-50" value="Wed, Mar 2nd" readonly placeholder="Due Date" />
                          </div>
                        </div>
                        <div class="col-lg-12 text-sm-end">
                          <ul class="list-inline mb-0 mt-lg-4 mt-3 pt-xl-2 d-sm-flex flex-wrap">
                            <li class="list-inline-item me-xl-auto">
                              <button type="button" class="btn btn-danger bg-danger bg-opacity-10 border-danger border border-opacity-10 text-danger btn-small">Delete</button>
                            </li>
                            <li class="list-inline-item me-xl-3">
                              <button type="button" class="btn  btn-outline-primary btn-small" data-bs-dismiss="modal"
                                aria-label="Close">Cancel</button>
                            </li>
                            <li class="list-inline-item">
                              <button type="button" class="btn btn-primary btn-small">Add </button>
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
      </div>
    </>
  )
}

export default Opportunities