import React from 'react'

const ChangePassword = () => {
    return (
        <div className="tab-pane fade" id="pills-password" role="tabpanel"
            aria-labelledby="pills-password-tab" tabindex="0">
            <form className="row">
                <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                        <label for="existing_password" className="form-label">Existing Password</label>
                        <input type="password" className="form-control" placeholder="Current Password"
                            required />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Password" required />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mb-3 mb-xl-4 pb-md-2">
                        <label for="confirm_password" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm Password"
                            required />
                    </div>
                </div>
                <div className="col-lg-12 mt-lg-4 mt-3 pt-xl-2">
                    <button type="button" className="btn btn-primary btn-small">Update Profile</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword