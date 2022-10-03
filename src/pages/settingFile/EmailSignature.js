import React from 'react'

const EmailSignature = () => {
    return (
        <div className="tab-pane fade" id="pills-signature" role="tabpanel"
            aria-labelledby="pills-signature-tab" tabindex="0">
            <form>
                <div className="form-check form-check-lg mb-2 mb-xl-3">
                    <input className="form-check-input" type="checkbox" id="cb1" />
                    <label className="form-check-label ms-1" for="cb1">
                        Enable Signature on All Outgoing Messages
                    </label>
                </div>
                <div className="form-check form-check-lg mb-2 mb-xl-3">
                    <input className="form-check-input" type="checkbox" id="cb2" />
                    <label className="form-check-label ms-1" for="cb2">
                        Include this signature before quoted text in replies
                    </label>
                </div>
                <img src="./assets/images/temp/text.png" className="img-fluid my-xl-5 my-md-4 my-3" />
                <button type="button" className="btn btn-primary btn-small">Next</button>
            </form>
        </div>
    )
}

export default EmailSignature