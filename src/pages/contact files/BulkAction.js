import React, { useEffect } from 'react'
import ContactHeader from '../contact files/ContactHeader'
import $ from 'jquery';

const BulkAction = () => {
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
                        "targets": 7,
                    }
                ]
            }
        );
    }, [])
    return (
        <>
            <div className="content-wrapper">
                <ContactHeader />
                <main class="container-fluid py-3 ps-lg-3 pe-lg-4 px-3">
                    <div class="card border-0 rounded-5 shadow bg-light-secondary overflow-hidden">
                        <div class="card-header rounded-5 border-0 bg-white shadow py-4">
                            <div class="row align-items-center">
                                <div class="col-xxl-3 col-xl-2">
                                    <h6 class="mb-xl-0 text-primary">Bulk Actions</h6>
                                </div>
                                <div class="col-xxl-9 col-xl-10">
                                    <div class="row justify-content-lg-end gx-3 gy-2">
                                        <div class="col-md col-sm-6">
                                            <select class="form-select bg-light border-light" aria-label="All Actions">
                                                <option value="1">All Actions</option>
                                            </select>
                                        </div>
                                        <div class="col-md col-sm-6">
                                            <select class="form-select bg-light border-light" aria-label="All Users">
                                                <option value="1">All Users</option>
                                            </select>
                                        </div>
                                        <div class="col-md col-sm-6">
                                            <select class="form-select bg-light border-light" aria-label="All Status">
                                                <option value="1">All Status</option>
                                            </select>
                                        </div>
                                        <div class="col-md-5 col-sm-6">
                                            <div class="input-group">
                                                <span class="input-group-text bg-light border-light" id="search-icon"><i
                                                    class="fa-solid fa-sm fa-magnifying-glass"></i></span>
                                                <input type="text" class="form-control bg-light border-light" placeholder="Search"
                                                    aria-label="Search" aria-describedby="search-icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body pt-1">
                            <div class="dataTable--custom">
                                <table id="campStaffListing" class="table w-100">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Bulk Operation (Type)</th>
                                            <th>Status</th>
                                            <th>Created</th>
                                            <th>User</th>
                                            <th>Completed</th>
                                            <th>Statistics</th>
                                            <th class="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Cast Out
                                            </td>
                                            <td>
                                                Bulk Campaign
                                            </td>
                                            <td>
                                                <span class="text-success">
                                                    Complete
                                                </span><br />
                                                <small class="text-primary">(View Details)</small>
                                            </td>
                                            <td>
                                                Feb 21, 2022<br />
                                                <small class="text-black-50">07:58 AM (PST)</small>
                                            </td>
                                            <td>
                                                Walter Hughes
                                            </td>
                                            <td>
                                                Feb 21, 2022<br />
                                                <small class="text-black-50">07:58 AM (PST)</small>
                                            </td>
                                            <td>
                                                <span class="text-primary">Show Stats</span>
                                            </td>
                                            <td class="text-center">
                                                <i class="fa-solid fa-lg fa-ellipsis-vertical cursor-pe"></i>
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

export default BulkAction