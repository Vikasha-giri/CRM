import React, { useEffect } from 'react'
import ContactHeader from './contact files/ContactHeader'
import $ from 'jquery';
import CardHeader from './contact files/CardHeader';


const Contact = () => {
    useEffect(() => {

        $('#campStaffListing').DataTable(
            {
                searching: false,
                "bLengthChange": false,
                paging: true,
                "initComplete": function (settings, json) {
                    $(".dataTables_wrapper .row").addClass("table-wrapup gx-0 mb-2 mb-lg-3");
                },
                columnDefs: [
                    {
                        sortable: false,
                        "targets": 6,
                    }
                ]
            }
        );

    }, [])
    return (
        <>
            <div className="content-wrapper">
                <ContactHeader />
                <main className="container-fluid py-3 ps-lg-3 pe-lg-4 px-3">
                    <div className="card border-0 rounded-5 shadow bg-light-secondary overflow-hidden">
                        <CardHeader />
                        <div className="card-body pt-1">
                            <div className="dataTable--custom">
                                <table id="campStaffListing" className="table w-100">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Created</th>
                                            <th>Last Activity</th>
                                            <th>Tag</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa-solid fa-lg fa-ellipsis-vertical cursor-pe"></i>
                                                    <input className="form-check-input ms-xl-2 ms-1" type="checkbox" value="" aria-label="..." />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span
                                                        className="d-flex align-items-center flex-shrink-0 justify-content-center wh-40 text-uppercase rounded-circle bg-success me-1 me-xl-2 text-white lh-1  bg-opacity-50">
                                                        TS
                                                    </span>
                                                    <span>Trevor Sullivan</span>
                                                </div>
                                            </td>
                                            <td>
                                                (951) 537-3286
                                            </td>
                                            <td>
                                                depnaw@ekradtol.co.uk
                                            </td>
                                            <td>
                                                Feb 20 2022 - 08:17 PM (PST)
                                            </td>
                                            <td>
                                                1 week ago
                                            </td>
                                            <td>
                                                <div className="bg-light py-1 px-2 rounded">
                                                    chartes wilson complete inactive - cash
                                                    out refinance
                                                </div>
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

export default Contact