import React from 'react'

const UserAvailability = () => {
    return (
        <div className="tab-pane fade" id="pills-availability" role="tabpanel"
            aria-labelledby="pills-availability-tab" tabindex="0">
            <form className="row">
                <div className="col-lg-6">
                    <div className="mb-3">
                        <label htmlFor="meeting_location" className="form-label">Meeting Location</label>
                        <select className="form-select">
                            <option selected="">-Select-</option>
                            <option value="1">Custom</option>
                        </select>
                    </div>
                    <div className="mb-3 mb-xl-4 pb-md-2">
                        <input type="text" className="form-control" aria-label="Meeting Location"
                            placeholder="Meeting Location" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                        <label htmlFor="time_zone" className="form-label">Time Zone</label>
                        <select className="form-select">
                            <option selected="">-Select-</option>
                            <option value="1">GMT-8:00 America/Los_Angels (PST)</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <h5 className="mb-3 pt-xl-3 pt-1">Available Hours</h5>
                    <div className="btn-group btn-group-custom mb-lg-4 mb-3 pb-xl-4 pb-2 d-flex position-relative overflow-auto"
                        role="group" aria-label="Basic checkbox toggle button group">
                        <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off" />
                        <label className="btn btn-outline-primary rounded-2 me-2 text-uppercase"
                            htmlFor="btncheck1">s</label>

                        <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off" />
                        <label className="btn btn-outline-primary rounded-2 me-2 text-uppercase"
                            htmlFor="btncheck2">m</label>

                        <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off" />
                        <label className="btn btn-outline-primary rounded-2 me-2 text-uppercase"
                            htmlFor="btncheck3">t</label>

                        <input type="checkbox" className="btn-check" id="btncheck4" autocomplete="off" />
                        <label className="btn btn-outline-primary rounded-2 me-2 text-uppercase"
                            htmlFor="btncheck4">w</label>

                        <input type="checkbox" className="btn-check" id="btncheck5" autocomplete="off" />
                        <label className="btn btn-outline-primary rounded-2 me-2 text-uppercase"
                            htmlFor="btncheck5">t</label>

                        <input type="checkbox" className="btn-check" id="btncheck6" autocomplete="off" />
                        <label className="btn btn-outline-primary rounded-2 me-2 text-uppercase"
                            htmlFor="btncheck6">f</label>

                        <input type="checkbox" className="btn-check" id="btncheck7" autocomplete="off" />
                        <label className="btn btn-outline-primary rounded-2 text-uppercase"
                            htmlFor="btncheck7">s</label>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row g-0 mb-3 mb-xl-4 pb-md-2">
                                <div className="col-6">
                                    <div className="row g-0">
                                        <div className="col-6">
                                            <label className="form-label">Monday</label>
                                        </div>
                                        <div className="col-6 text-end">
                                            <label className="form-label text-primary">+ hours</label>
                                        </div>
                                    </div>
                                    <span className="clearable">
                                        <input type="text"
                                            className="form-control bg-light rounded-end-0 bg-opacity-50"
                                            placeholder="12:00 AM" />
                                        <i className="clearable__clear">&times;</i>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <div className="text-end">
                                        <label className="form-label text-primary">Apply All</label>
                                    </div>
                                    <span className="clearable">
                                        <input type="text"
                                            className="form-control bg-light rounded-start-0 bg-opacity-50"
                                            placeholder="12:00 AM" />
                                        <i className="clearable__clear">&times;</i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row g-0 mb-3 mb-xl-4 pb-md-2">
                                <div className="col-6">
                                    <div className="row g-0">
                                        <div className="col-6">
                                            <label className="form-label">Monday</label>
                                        </div>
                                        <div className="col-6 text-end">
                                            <label className="form-label text-primary">+ hours</label>
                                        </div>
                                    </div>
                                    <span className="clearable">
                                        <input type="text"
                                            className="form-control bg-light rounded-end-0 bg-opacity-50"
                                            placeholder="12:00 AM" />
                                        <i className="clearable__clear">&times;</i>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <div className="text-end">
                                        <label className="form-label text-primary">Apply All</label>
                                    </div>
                                    <span className="clearable">
                                        <input type="text"
                                            className="form-control bg-light rounded-start-0 bg-opacity-50"
                                            placeholder="12:00 AM" />
                                        <i className="clearable__clear">&times;</i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row g-0 mb-3 mb-xl-4 pb-md-2">
                                <div className="col-6">
                                    <div className="row g-0">
                                        <div className="col-6">
                                            <label className="form-label">Monday</label>
                                        </div>
                                        <div className="col-6 text-end">
                                            <label className="form-label text-primary">+ hours</label>
                                        </div>
                                    </div>
                                    <span className="clearable">
                                        <input type="text"
                                            className="form-control bg-light rounded-end-0 bg-opacity-50"
                                            placeholder="12:00 AM" />
                                        <i className="clearable__clear">&times;</i>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <div className="text-end">
                                        <label className="form-label text-primary">Apply All</label>
                                    </div>
                                    <span className="clearable">
                                        <input type="text"
                                            className="form-control bg-light rounded-start-0 bg-opacity-50"
                                            placeholder="12:00 AM" />
                                        <i className="clearable__clear">&times;</i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row g-0 mb-3 mb-xl-4 pb-md-2">
                                <div className="col-6">
                                    <div className="row g-0">
                                        <div className="col-6">
                                            <label className="form-label">Monday</label>
                                        </div>
                                        <div className="col-6 text-end">
                                            <label className="form-label text-primary">+ hours</label>
                                        </div>
                                    </div>
                                    <span className="clearable">
                                        <input type="text"
                                            className="form-control bg-light rounded-end-0 bg-opacity-50"
                                            placeholder="12:00 AM" />
                                        <i className="clearable__clear">&times;</i>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <div className="text-end">
                                        <label className="form-label text-primary">Apply All</label>
                                    </div>
                                    <span className="clearable">
                                        <input type="text"
                                            className="form-control bg-light rounded-start-0 bg-opacity-50"
                                            placeholder="12:00 AM" />
                                        <i className="clearable__clear">&times;</i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row g-0 mb-3 mb-xl-4 pb-md-2">
                                <div className="col-6">
                                    <div className="row g-0">
                                        <div className="col-6">
                                            <label className="form-label">Monday</label>
                                        </div>
                                        <div className="col-6 text-end">
                                            <label className="form-label text-primary">+ hours</label>
                                        </div>
                                    </div>
                                    <span className="clearable">
                                        <input type="text"
                                            className="form-control bg-light rounded-end-0 bg-opacity-50"
                                            placeholder="12:00 AM" />
                                        <i className="clearable__clear">&times;</i>
                                    </span>
                                </div>
                                <div className="col-6">
                                    <div className="text-end">
                                        <label className="form-label text-primary">Apply All</label>
                                    </div>
                                    <span className="clearable">
                                        <input type="text"
                                            className="form-control bg-light rounded-start-0 bg-opacity-50"
                                            placeholder="12:00 AM" />
                                        <i className="clearable__clear">&times;</i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-lg-4 mt-3">
                        <button type="button" className="btn btn-primary btn-small">Next</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserAvailability