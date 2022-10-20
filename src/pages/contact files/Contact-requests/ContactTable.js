import React, { useEffect, useState } from 'react'



const ContactTable = ({contreqData}) => {
    
  const [searchTitle, setSearchTitle] = useState("")

    return (
        <>              
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
                                                onChange={(e) => setSearchTitle(e.target.value)}
                                                    aria-label="Search" aria-describedby="search-icon"  />
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
                                    {contreqData.filter((val) => {
                                        if (searchTitle === "") {
                                          return val
                                        } else if (val.Type.toLowerCase().includes(searchTitle.toLocaleLowerCase())) {
                                          return val;
                                        }
                                      }).map((curElem, index) =>{
                                        return(
                                            <>
                                            <tr key={index}>
                                            <td>
                                                <span className="text-danger ff-primary fw-medium"> {curElem.status }</span>
                                            </td>
                                            <td>
                                               {curElem.DateTime}
                                            </td>
                                            <td>
                                                {curElem.Type}
                                            </td>
                                            <td className="text-center">
                                            {curElem.Created}
                                            </td>
                                            <td className="text-center">
                                            {curElem.Updated}
                                            </td>
                                            <td className="text-center">
                                            {curElem.Skipped}
                                            </td>
                                            <td className="text-center">
                                            {curElem.Failed}
                                            </td>
                                            <td className="text-center">
                                            {curElem.Deleted}
                                            </td>
                                        </tr>
                                            </>
                                        )
                                       
                                      })}
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
             
               
        </>
    )
}

export default ContactTable