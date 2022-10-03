import React, { useEffect } from 'react'
import $ from 'jquery';
import Header from '../components/Header';
const AddNew = () => {

    useEffect(() => {
        // var input = $("#phone");
        // geoIpLookup = function (callback) {
        //     $.get('https://ipinfo.io', function () {
        //     }, "jsonp").always(function (resp) {
        //         var countryCode = (resp && resp.country) ? resp.country : "";
        //         callback(countryCode);
        //     });
        // },
        //     geoIpLookup((countryCode) => {
        //         input.intlTelInput({ initialCountry: countryCode.toLowerCase(), separateDialCode: true });
        //     })
        // input.on("countrychange", function () {
        //     console.log('dialCode ', input.intlTelInput("getSelectedCountryData").dialCode)
        //     console.log('countryCode ', input.intlTelInput("getSelectedCountryData").iso2)
        //     console.log('phoneNumber ', input.val())
        // });
        // const phoneNo = () => {
        //     input.intlTelInput("setCountry", "gb");
        //     input.intlTelInput("setNumber", "+447986129475");
        // }
    }, [])
    return (
        <>
            <div className="content-wrapper">
                <Header />
                <main className="container-fluid py-3 ps-lg-3 pe-lg-4 px-3">
                    <div className="row g-0 justify-content-center">
                        <div className="col-xxl-10 col-xl-11">
                            <div className="card border-0 shadow rounded-5">
                                <div className="card-body p-xl-6 p-md-5 p-4">
                                    <h1 className="h2 mb-lg-4 mb-3 pb-xl-2">Adding User</h1>
                                    <form className="row">
                                        <div className="col-lg-6">
                                            <div className="mb-3 mb-xl-4 pb-md-2">
                                                <label for="full_name" className="form-label">Full Name*</label>
                                                <input type="text" className="form-control form-control-lg" placeholder="Full Name" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3 mb-xl-4 pb-md-2">
                                                <label for="phone" className="form-label">Phone Number*</label>
                                                <input id="phone" className="form-control form-control-lg" placeholder="Phone Number" name="phone" type="tel" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3 mb-xl-4 pb-md-2">
                                                <label for="email" className="form-label">Email*</label>
                                                <input type="email" className="form-control form-control-lg" required placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-3 mb-xl-4 pb-md-2">
                                                <label for="nmls" className="form-label">NMLS*</label>
                                                <input type="text" className="form-control form-control-lg" placeholder="NMLS" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3 mb-xl-4 pb-md-2">
                                                <label for="branch_manager" className="form-label">Who is the branch manager</label>
                                                <input type="text" className="form-control form-control-lg" placeholder="Who is the branch manager" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3 mb-xl-4 pb-md-2">
                                                <label for="notes" className="form-label">Notes</label>
                                                <textarea className="form-control form-control-lg" placeholder="Enter here" rows="6"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 text-sm-end">
                                            <ul className="list-inline mb-0 mt-lg-4 mt-3 pt-xl-2">
                                                <li className="list-inline-item me-xl-3">
                                                    <button type="button" className="btn btn-lg btn-outline-primary btn-small" data-bs-dismiss="modal"
                                                        aria-label="Close">Cancel</button>
                                                </li>
                                                <li className="list-inline-item">
                                                    <button type="button" className="btn btn-lg btn-primary btn-small">Add</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default AddNew