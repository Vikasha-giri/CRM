import React, { useEffect } from 'react'
import ContactHeader from '../contact files/ContactHeader'
import $ from 'jquery';

const ContactRequest = () => {
    useEffect(() => {

        $('#campStaffListing').DataTable(
            {
                searching: false,
                "bLengthChange": false,
                paging: true,
                "initComplete": function (settings, json) {
                    $(".dataTables_wrapper .row").addClass("table-wrapup gx-0 mb-2 mb-lg-3");
                }
            }
        );

    }, [])
    return (
        <>
            <div className="content-wrapper">
                <ContactHeader />
                {/* <CardHeader /> */}
                <main className="container-fluid py-3 ps-lg-3 pe-lg-4 px-3">
                    <div className="card border-0 rounded-5 shadow bg-light-secondary overflow-hidden">
                        <div className="card-header rounded-5 border-0 bg-white shadow py-4">
                            <div className="row align-items-center">
                                <div className="col-xxl-5 col-md-3">
                                    <h6 className="mb-md-0 text-primary">Contact Requests</h6>
                                </div>
                                <div className="col-xxl-7 col-md-9">
                                    <div className="row justify-content-md-end gx-3">
                                        <div className="col-sm-3 col-lg-4">
                                            <select className="form-select bg-light border-light" aria-label="Columns">
                                                <option value="1">Columns</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6 col-lg-7">
                                            <div className="input-group my-sm-0 my-2">
                                                <span className="input-group-text bg-light border-light" id="search-icon"><i
                                                    className="fa-solid fa-sm fa-magnifying-glass"></i></span>
                                                <input type="text" className="form-control bg-light border-light" placeholder="Search"
                                                    aria-label="Search" aria-describedby="search-icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-1">
                            <div className="dataTable--custom">
                                <table id="campStaffListing" className="table w-100">
                                    <thead>
                                        <tr>
                                            <th>Status</th>
                                            <th>Date & Time</th>
                                            <th>Type</th>
                                            <th className="text-center">Created</th>
                                            <th className="text-center">Updated</th>
                                            <th className="text-center">Skipped</th>
                                            <th className="text-center">Failed</th>
                                            <th className="text-center">Deleted</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="text-danger ff-primary fw-medium"> - Pending</span>
                                            </td>
                                            <td>
                                                20 days ago
                                            </td>
                                            <td>
                                                BULK UPDATE
                                            </td>
                                            <td className="text-center">
                                                0
                                            </td>
                                            <td className="text-center">
                                                -/-
                                            </td>
                                            <td className="text-center">
                                                0
                                            </td>
                                            <td className="text-center">
                                                0
                                            </td>
                                            <td className="text-center">
                                                0
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default ContactRequest