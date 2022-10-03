import React, { useEffect } from 'react'
import $ from 'jquery';
import Header from '../components/Header';
import PersonalData from './settingFile/PersonalData';
import EmailSignature from './settingFile/EmailSignature';
import UserAvailability from './settingFile/UserAvailability';
import ChangePassword from './settingFile/ChangePassword';

const Setting = () => {
    return (
        <>
            <div className="content-wrapper">
                <Header />
                <main class="container-fluid py-3 ps-lg-3 pe-lg-4 px-3">
                    <div class="row g-0 justify-content-center">
                        <div class="col-xxl-10 col-xl-11">
                            <div class="card border-0 shadow rounded-5">
                                <div class="card-body p-xl-6 p-md-5 p-4">
                                    <h1 class="h2">Settings</h1>
                                    <hr class="my-lg-4 my-3 pb-xl-3 pb-2" />
                                    <ul class="nav nav-pills nav-pills-custom d-flex flex-nowrap overflow-auto mb-4 mb-lg-4 pb-xl-4 pb-2" id="pills-tab" role="tablist">
                                        <li class="nav-item me-xl-3 me-xxl-4" role="presentation">
                                            <button class="nav-link text-nowrap active" id="pills-data-tab" data-bs-toggle="pill" data-bs-target="#pills-data" type="button" role="tab" aria-controls="pills-data" aria-selected="true">Personal Data</button>
                                        </li>
                                        <li class="nav-item me-xl-3 me-xxl-4" role="presentation">
                                            <button class="nav-link text-nowrap" id="pills-signature-tab" data-bs-toggle="pill" data-bs-target="#pills-signature" type="button" role="tab" aria-controls="pills-signature" aria-selected="false">Email Signature</button>
                                        </li>
                                        <li class="nav-item me-xl-3 me-xxl-4" role="presentation">
                                            <button class="nav-link text-nowrap" id="pills-availability-tab" data-bs-toggle="pill" data-bs-target="#pills-availability" type="button" role="tab" aria-controls="pills-availability" aria-selected="false">User Availability
                                                <i class="fa-solid fa-circle-info" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="This setting is applicable with only team calendars."></i></button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link text-nowrap" id="pills-password-tab" data-bs-toggle="pill" data-bs-target="#pills-password" type="button" role="tab" aria-controls="pills-password" aria-selected="false">Change Password</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <PersonalData />
                                        <EmailSignature />
                                        <UserAvailability />
                                        <ChangePassword />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Setting