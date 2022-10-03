import React, { useEffect } from 'react'
import ContactHeader from '../contact files/ContactHeader'
import $ from 'jquery';
import CardHeader from './CardHeader';

const Campaign = () => {
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
                        "targets": 3,
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
                        <div class="card-body pt-1">
                            <div class="dataTable--custom">
                                <table id="campStaffListing" class="table w-100">
                                    <thead>
                                        <tr>
                                            <th>List/ Campaign Name</th>
                                            <th>Created</th>
                                            <th>Contacts</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Christmas campaign list
                                            </td>
                                            <td>
                                                Feb 20 2022 - 08:17 PM (PST)
                                            </td>
                                            <td>
                                                4
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center justify-content-start text-primary">
                                                    <span class="p-2 bg-primary rounded-circle">
                                                        <span class="visually-hidden">New alerts</span>
                                                    </span>
                                                    <span class="ms-2 lh-1 ff-primary fw-medium">Add Contact</span>
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

export default Campaign