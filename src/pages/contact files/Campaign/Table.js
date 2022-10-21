import React, { useState } from 'react'
import plusIcon from '../../../assets/images/temp/plus-icon.png'
import filterIcon from '../../../assets/images/temp/filter-icon.png'
import printIcon from '../../../assets/images/temp/print-icon.png'
import chatIcon from '../../../assets/images/temp/chat-icon.png'
import messageIcon from '../../../assets/images/temp/message-icon.png'
import nounTag from '../../../assets/images/temp/noun-tag.png'
import nounTag2 from '../../../assets/images/temp/noun-tag-2.png'


const Table =  ({ userData })=> {
  console.log(userData)
    const [searchTitle, setSearchTitle] = useState("")

  return (
    <>
    <div className="card-header rounded-5 border-0 bg-white shadow py-4">
    <div className="row">
        <div className="col-xxl-5">
            <ul className="list-inline mb-0">
                <li className="list-inline-item mb-2">
                    <button type="button" className="btn btn-light p-1 lh-1 icon-size" >
                        <img src={plusIcon} />
                    </button>
                </li>
                <li className="list-inline-item mb-2">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#updateOpportunityModal"
                        className="btn btn-light p-1 lh-1 icon-size">
                        <img src={filterIcon} />
                    </button>
                </li>
                <li className="list-inline-item mb-2">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#workflowModal"
                        className="btn btn-light p-1 lh-1 icon-size">
                        <img src={printIcon} />
                    </button>
                </li>
                <li className="list-inline-item mb-2">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#sendSMSModal"
                        className="btn btn-light p-1 lh-1 icon-size">
                        <img src={chatIcon} />
                    </button>
                </li>
                <li className="list-inline-item mb-2">
                    <button type="button" className="btn btn-light p-1 lh-1 icon-size">
                        <img src={messageIcon} />
                    </button>
                </li>
                <li className="list-inline-item mb-2">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#addTagsModal"
                        className="btn btn-light p-1 lh-1 icon-size">
                        <img src={nounTag} />
                    </button>
                </li>
                <li className="list-inline-item mb-2">
                    <button type="button" className="btn btn-light p-1 lh-1 icon-size">
                        <img src={nounTag2} />
                    </button>
                </li>
            </ul>
        </div>
        <div className="col-xxl-7">
            <div className="row gx-3">
                <div className="col-sm-3">
                    <select className="form-select bg-light border-light" aria-label="Columns">
                        <option value="1">Columns</option>
                    </select>
                </div>
                <div className="col-sm-6">
                    <div className="input-group my-sm-0 my-2">
                        <span className="input-group-text bg-light border-light" id="search-icon"><i
                            className="fa-solid fa-sm fa-magnifying-glass"></i></span>
                        <input type="text" className="form-control bg-light border-light"  placeholder="Search"
                        onChange={(e) => setSearchTitle(e.target.value)}
                        aria-label="Search" aria-describedby="search-icon" />
                    </div>
                </div>
                <div className="col-sm-3">
                    <button type="button" className="btn btn-primary w-100">Add New</button>
                </div>
            </div>
        </div>
    </div>
</div>
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
    {userData.map((curElm)=>{
        return(
            <>
            <tr>
            <td>
               {curElm.name}
            </td>
            <td>
                {curElm.created}
            </td>
            <td>
              {curElm.cantact_num}
            </td>
            <td>
                <div class="d-flex align-items-center justify-content-start text-primary">
                    <span class="p-2 bg-primary rounded-circle text-white text-center add_contact">+
                        <span class="visually-hidden">New alerts</span>
                    </span>
                    <span class="ms-2 lh-1 ff-primary fw-medium">Add Contact</span>
                </div>
            </td>
        </tr>
            </>
        )
    })}
        
    </tbody>
</table>
</>
  )
}

export default Table