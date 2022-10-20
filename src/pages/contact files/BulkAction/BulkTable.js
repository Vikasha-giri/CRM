import React, {useState } from 'react'


const BulkTable = ({BulkData}) => {
    const [searchTitle, setSearchTitle] = useState("")
    return (
        <div>
            
                        <div className="card-header rounded-5 border-0 bg-white shadow py-4">
                            <div className="row align-items-center">
                                <div className="col-xxl-3 col-xl-2">
                                    <h6 className="mb-xl-0 text-primary">Bulk Actions</h6>
                                </div>
                                <div className="col-xxl-9 col-xl-10">
                                    <div className="row justify-content-lg-end gx-3 gy-2">
                                        <div className="col-md col-sm-6">
                                            <select className="form-select bg-light border-light" aria-label="All Actions">
                                                <option value="1">All Actions</option>
                                            </select>
                                        </div>
                                        <div className="col-md col-sm-6">
                                            <select className="form-select bg-light border-light" aria-label="All Users">
                                                <option value="1">All Users</option>
                                            </select>
                                        </div>
                                        <div className="col-md col-sm-6">
                                            <select className="form-select bg-light border-light" aria-label="All Status">
                                                <option value="1">All Status</option>
                                            </select>
                                        </div>
                                        <div className="col-md-5 col-sm-6">
                                            <div className="input-group">
                                                <span className="input-group-text bg-light border-light" id="search-icon"><i
                                                    className="fa-solid fa-sm fa-magnifying-glass"></i></span>
                                                <input type="text" className="form-control bg-light border-light" placeholder="Search"
                                                onChange={(e) => setSearchTitle(e.target.value)}
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
                                            <th>Name</th>
                                            <th>Bulk Operation (Type)</th>
                                            <th>Status</th>
                                            <th>Created</th>
                                            <th>User</th>
                                            <th>Completed</th>
                                            <th>Statistics</th>
                                            <th className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {BulkData.filter((val) => {
                                        if (searchTitle === "") {
                                          return val
                                        } else if (val.name.toLowerCase().includes(searchTitle.toLocaleLowerCase())) {
                                          return val;
                                        }
                                      }).map((curElem) =>{
                                        return(
                                            <>
                                            <tr>
                                            <td>
                                             {curElem.name}
                                            </td>
                                            <td>
                                            {curElem.Bulk_Operation}
                                            </td>
                                            <td>
                                                <span className="text-success">
                                                {curElem.status}
                                                </span><br />
                                                <small className="text-primary">(View Details)</small>
                                            </td>
                                            <td>
                                            {curElem.name}<br />
                                                <small className="text-black-50">07:58 AM (PST)</small>
                                            </td>
                                            <td>
                                            {curElem.User}
                                            </td>
                                            <td>
                                            {curElem.name}<br />
                                                <small className="text-black-50">07:58 AM (PST)</small>
                                            </td>
                                            <td>
                                                <span className="text-primary"> {curElem.name}</span>
                                            </td>
                                            <td className="text-center">
                                                <i className="fa-solid fa-lg fa-ellipsis-vertical cursor-pe"></i>
                                            </td>
                                        </tr>
                                            </>
                                        )
                                    })}
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                   
        </div>
    )
}

export default BulkTable