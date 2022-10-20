import Search from 'antd/lib/transfer/search';
import React, { useEffect, useState } from 'react'
import plusIcon from '../../assets/images/temp/plus-icon.png'
import filterIcon from '../../assets/images/temp/filter-icon.png'
import printIcon from '../../assets/images/temp/print-icon.png'
import chatIcon from '../../assets/images/temp/chat-icon.png'
import messageIcon from '../../assets/images/temp/message-icon.png'
import nounTag from '../../assets/images/temp/noun-tag.png'
import nounTag2 from '../../assets/images/temp/noun-tag-2.png'
// import CardHeader from './contact files/CardHeader';
import "./contact.css"


const Contact = ({userData}) => {
  
  const [searchTitle, setSearchTitle] = useState("")
  const [order, setorder] = useState("ASC");

  // const searchHandler = (searchTerm) => {
  //   setSearchTerm(searchTerm);
  //   if (searchTerm !== "") {
  //     const newContactList = userData.filter((contact) => {
  //       return Object.values(contact)
  //         .join(" ")
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase());
  //     });
  //     setSearchResults(newContactList);
  //   } else {
  //     setSearchResults(userData);
  //   }
  // };


 
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
      
      <div className="card-body pt-1">
        <div className="dataTable--custom">
          <table className="table w-100">
            <thead>
              <tr>
                <th ></th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Created</th>
                <th>Last Activity</th>
                <th>Tag</th>
              </tr>
            </thead>
            <tbody>
              {userData.filter((val) => {
                if (searchTitle === "") {
                  return val
                } else if (val.name.toLowerCase().includes(searchTitle.toLocaleLowerCase())) {
                  return val;
                }
              }).map((curElem) => {
                return (
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-lg fa-ellipsis-vertical cursor-pe"></i>
                        <input className="htmlForm-check-input ms-xl-2 ms-1" type="checkbox" value="" aria-label="..." />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span
                          className="d-flex align-items-center flex-shrink-0 justify-content-center wh-40 text-uppercase rounded-circle bg-success me-1 me-xl-2 text-white lh-1  bg-opacity-50">
                          TS
                        </span>
                        <span>{curElem.name}</span>
                      </div>
                    </td>
                    <td>
                      <span>{curElem.Phone}</span>

                    </td>
                    <td>
                      {curElem.email}
                    </td>
                    <td>
                      {curElem.created}
                    </td>
                    <td>
                      {curElem.last_Activity}
                    </td>
                    <td>
                      <div className="bg-light py-1 px-2 rounded">
                        {curElem.tag}
                      </div>
                    </td>

                  </tr>
                )

              }) }

            </tbody>
          </table>

        </div>

      </div>


    </>
  )
}

export default Contact