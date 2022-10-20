import React, { useState } from 'react';
import Header from '../components/Header';
import filter from "../assets/images/temp/filter.png"
import edit from "../assets/images/temp/edit.png"
import user2 from "../assets/images/temp/user2.jpg"
const Conversations = () => {

  return (
    <div className="content-wrapper">
      <Header />
      <main className="container-fluid conversation-section py-3 ps-lg-3 pe-lg-4 px-3">
      <div className="row h-100">
      <div className="col-xxl-3 col-lg-3 order-xl-0 order-1 col-xl">
          <button className="btn btn-primary w-100 text-center mt-3 d-xl-none" type="button" data-bs-toggle="collapse" data-bs-target="#conversationLeft" aria-expanded="false" aria-controls="conversationLeft">
            Chat Bar
          </button>
          <div className="collapse d-xl-block" id="conversationLeft">
            <div className="conversation-section-left card border-0 rounded-5 shadow mt-3 mt-xl-0">
              <div className="card-body p-0">
                <ul className="nav nav-pills nav-pills-custom d-flex flex-nowrap overflow-auto justify-content-xl-evenly pt-3 pt-xl-4 mb-0" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap active" id="pills-unread-tab" data-bs-toggle="pill" data-bs-target="#pills-unread" type="button" role="tab" aria-controls="pills-unread" aria-selected="true">Unread</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-recents-tab" data-bs-toggle="pill" data-bs-target="#pills-recents" type="button" role="tab" aria-controls="pills-recents" aria-selected="false">Recents</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link text-nowrap" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="false">All</button>
                  </li>
                </ul>
                <hr className="mt-0"/>
                <div className="px-3">
                  <div className="d-flex justify-content-between align-items-center my-lg-4 my-3">
                    <h6 className="mb-0">Messages</h6>
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item">
                      <div className="position-relative">
                        <img src={filter} className="img-fluid" alt="Filter"/>
                      <span className="position-absolute top-0 mt-2 start-100 translate-middle p-1 bg-danger rounded-circle">
                        <span className="visually-hidden">New alerts</span>
                      </span>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <img src={edit} className="img-fluid" alt="Edit"/>
                    </li>
                  </ul>
                  </div>
                  <div className="input-group mb-3">
                      <input type="text" className="form-control bg-light border-light" placeholder="Search" aria-label="Search" aria-describedby="search-icon"/>
                      <span className="input-group-text bg-light border-light" id="search-icon"><i className="fa-solid fa-sm fa-magnifying-glass"></i></span>
                    </div>
                </div>
                
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-unread" role="tabpanel" aria-labelledby="pills-unread-tab" tabIndex="0">
                    <ul className="list-unstyled">
                      <li className="d-flex px-3 py-3">
                        <div className="wh-40 d-flex flex-shrink-0 align-items-center justify-content-center text-center text-uppercase text-white rounded-circle fs-14 me-2 me-xl-3 me-xxl-2 position-relative jesse_king">
                          jk
                          <span className="position-absolute top-50 start-100 translate-middle bg-white text-success msg-icon d-flex align-items-center justify-content-center rounded-circle">
                            <i className="fa-solid fa-message fa-xs"></i>
                          </span>
                        </div>
                        <div className="w-100 justify-content-between overflow-hidden d-flex d-xl-block d-xxl-flex">
                          <div className="w-100 overflow-hidden">
                            <h6 className="mb-1">Jesse King</h6>
                            <p className="mb-0 fs-14">Sure thanks</p>
                          </div>
                          <div className="fs-12 ms-lg-0 ms-2 ms-xxl-1 d-flex d-xl-block d-xxl-flex justify-content-xl-end">
                            3/1 <span className="ms-1">12:40pm</span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex px-3 py-3 bg-light">
                        <div  className="wh-40 d-flex flex-shrink-0 align-items-center justify-content-center text-center text-uppercase text-white rounded-circle fs-14 me-2 me-xl-3 me-xxl-2 position-relative Jackson_Hart">
                          jh
                          <span className="position-absolute top-50 start-100 translate-middle bg-white text-success msg-icon d-flex align-items-center justify-content-center rounded-circle">
                            <i className="fa-solid fa-message fa-xs"></i>
                          </span>
                        </div>
                        <div className="w-100 justify-content-between overflow-hidden d-flex d-xl-block d-xxl-flex">
                          <div className="w-100 overflow-hidden">
                            <h6 className="mb-1">Jackson Hart</h6>
                            <p className="mb-0 fs-14">Sure thanks</p>
                          </div>
                          <div className="fs-12 ms-lg-0 ms-2 ms-xxl-1 d-flex d-xl-block d-xxl-flex justify-content-xl-end">
                            3/1 <span className="ms-1">12:40pm</span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex px-3 py-3">
                        <div  className="wh-40 d-flex flex-shrink-0 align-items-center justify-content-center text-center text-uppercase text-white rounded-circle fs-14 me-2 me-xl-3 me-xxl-2 position-relative donald_gonzales">
                         dg
                          <span className="position-absolute top-50 start-100 translate-middle bg-white text-success msg-icon d-flex align-items-center justify-content-center rounded-circle">
                            <i className="fa-solid fa-message fa-xs"></i>
                          </span>
                        </div>
                        <div className="w-100 justify-content-between overflow-hidden d-flex d-xl-block d-xxl-flex">
                          <div className="w-100 overflow-hidden">
                            <h6 className="mb-1">Donald Gonzales</h6>
                            <p className="mb-0 fs-14">Sure thanks</p>
                          </div>
                          <div className="fs-12 ms-lg-0 ms-2 ms-xxl-1 d-flex d-xl-block d-xxl-flex justify-content-xl-end">
                            3/1 <span className="ms-1">12:40pm</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="pills-recents" role="tabpanel" aria-labelledby="pills-recents-tab" tabIndex="0">
                    2
                  </div>
                  <div className="tab-pane fade" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          </div>
        
        <div className="col-xxl-6 col-lg-6 col-xl-5 order-xl-1 order-2">
        
          <div className="conversation-section-content mt-xl-0 mt-3 card border-0 bg-light-secondary rounded-5 shadow">
            <div className="card-body py-xxl-4 px-0">
                <h3 className="px-xxl-4 px-3">Jesse King</h3>
                <div className="msg-section px-xxl-4 px-3 py-3">
                  <div className="row gx-2 mb-3">
                    <div className="col-auto">
                      <div  className="wh-40 d-flex flex-shrink-0 align-items-center justify-content-center text-center text-uppercase text-white rounded-circle fs-14 me-2 me-xl-3 me-xxl-2 position-relative jesse_king">
                        jk
                        <span className="position-absolute top-50 start-100 translate-middle bg-white text-success msg-icon d-flex align-items-center justify-content-center rounded-circle">
                          <i className="fa-solid fa-message fa-xs"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col col-xxl-8">
                      <div className="bg-light d-inline-block p-3 mb-1 msg-section-left">
                        Lorem Ipsum is simply dummy text of the  printing and typesetting industry.
                      </div>
                      <small className="text-black-50 d-block fs-14">11:48 AM</small>
                    </div>
                  </div>
                  <div className="row justify-content-end gx-2 mb-3">
                    <div className="col col-xxl-8 text-end">
                      <div className="bg-primary d-inline-block text-white p-3 mb-1 msg-section-right">
                        Sure how can i help?
                      </div>
                      <small className="text-black-50 d-block fs-14">11:48 AM</small>
                    </div>
                    <div className="col-auto">
                      <div  className="wh-40 d-flex flex-shrink-0 align-items-center justify-content-center text-center text-uppercase text-white rounded-circle fs-14 ms-2 ms-xl-3 ms-xxl-2 position-relative jesse_king_message">
                        jk
                        <span className="position-absolute top-50 start-0 translate-middle bg-white text-success msg-icon d-flex align-items-center justify-content-center rounded-circle">
                          <i className="fa-solid fa-message fa-xs"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 mb-3">
                    <div className="col-auto">
                      <div  className="wh-40 d-flex flex-shrink-0 align-items-center justify-content-center text-center text-uppercase text-white rounded-circle fs-14 me-2 me-xl-3 me-xxl-2 position-relative jesse_king">
                        jk
                        <span className="position-absolute top-50 start-100 translate-middle bg-white text-success msg-icon d-flex align-items-center justify-content-center rounded-circle">
                          <i className="fa-solid fa-message fa-xs"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col col-xxl-8">
                      <div className="bg-light d-inline-block p-3 mb-1 msg-section-left">
                        Lorem Ipsum is simply dummy text of the  printing and typesetting industry.
                      </div>
                      <small className="text-black-50 d-block fs-14">11:48 AM</small>
                    </div>
                  </div>
                  <div className="row justify-content-end gx-2 mb-3">
                    <div className="col col-xxl-8 text-end">
                      <div className="bg-primary d-inline-block text-white p-3 mb-1 msg-section-right">
                        Sure how can i help?
                      </div>
                      <small className="text-black-50 d-block fs-14">11:48 AM</small>
                    </div>
                    <div className="col-auto">
                      <div  className="wh-40 d-flex flex-shrink-0 align-items-center justify-content-center text-center text-uppercase text-white rounded-circle fs-14 ms-2 ms-xl-3 ms-xxl-2 position-relative jesse_king_message">
                        jk
                        <span className="position-absolute top-50 start-0 translate-middle bg-white text-success msg-icon d-flex align-items-center justify-content-center rounded-circle">
                          <i className="fa-solid fa-message fa-xs"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row gx-2 mb-3">
                    <div className="col-auto">
                      <div  className="wh-40 d-flex flex-shrink-0 align-items-center justify-content-center text-center text-uppercase text-white rounded-circle fs-14 me-2 me-xl-3 me-xxl-2 position-relative jesse_king">
                        jk
                        <span className="position-absolute top-50 start-100 translate-middle bg-white text-success msg-icon d-flex align-items-center justify-content-center rounded-circle">
                          <i className="fa-solid fa-message fa-xs"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col col-xxl-8">
                      <div className="bg-light d-inline-block p-3 mb-1 msg-section-left">
                        Sure thanks.
                      </div>
                      <small className="text-black-50 d-block fs-14">11:48 AM</small>
                    </div>
                  </div>
                </div>
               <div className="px-xxl-4 px-3">
                <hr className="mt-0"/>
                <ul className="nav nav-pills nav-pills-custom mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item me-xl-3" role="presentation">
                    <button className="nav-link active p-1">SMS</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link p-1">Email</button>
                  </li>
                </ul>
                <textarea className="form-control form-control-sm rounded-4 mb-3 textarea-resize-none" placeholder="Type a message" rows="3"></textarea>
                <div className="text-end">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <button type="button" className="btn px-4 btn-light border" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                    </li>
                    <li className="list-inline-item">
                      <button type="button" className="btn px-4 btn-primary"><i className="fa-regular fa-paper-plane"></i> Send</button>
                    </li>
                  </ul>
                </div>
               </div>
            </div>
          </div>
         
        </div>
        <div className="col-xxl-3 col-xl-3 order-xl-2 order-0">
          
          <div className="conversation-section-right card border-0 rounded-5 shadow">
            <div className="card-body">
              <img src={user2} className="object-fit-cover user-img rounded-circle mx-auto d-block" alt="User Image" />
            <h4 className="text-center mt-lg-4 mt-3">Jesse King</h4>
            <hr className="my-xl-4" />
            <ul className="list-unstyled mb-0">
              <li className="d-flex justify-content-start align-items-center mb-3">
                <i className="fa-solid fa-lg fa-phone text-dark text-opacity-50 flex-shrink-0 me-3"></i>
              <div className="w-100 overflow-hidden">
                <p className="mb-0 fw-medium ff-primary">(940) 783-2395</p>
              </div>
              </li>
              <li className="d-flex justify-content-start align-items-center mb-3">
                <i className="fa-solid fa-lg fa-envelope text-dark text-opacity-50 flex-shrink-0 me-3"></i>
                <div className="w-100 overflow-hidden">
                  <p className="mb-0 fw-medium ff-primary">ijdafu@ocececol.com</p>
                </div>
              </li>
              <li className="d-flex justify-content-start align-items-center mb-3">
                <i className="fa-solid fa-lg fa-tag fa-rotate-90 text-dark text-opacity-50 flex-shrink-0 me-3"></i>
                <div className="w-100 overflow-hidden">
                  <input className="htmlForm-control htmlForm-control-sm rounded-0 border-top-0 border-end-0 border-start-0 px-0" type="text" placeholder="Add Tags" aria-label="Add Tags"/>
                </div>
              </li>
            </ul>
            <ul className="list-inline">
              <li className="list-inline-item">
                <span className="badge bg-light text-dark-blue fs-14 text-wrap mb-2">past client - john & deo <i className="fa-solid fa-xmark text-dark text-opacity-50 ms-1"></i></span>
              </li>
              <li className="list-inline-item">
                <span className="badge bg-light text-dark-blue fs-14 text-wrap mb-2">past client  <i className="fa-solid fa-xmark text-dark text-opacity-50 ms-1"></i></span>
              </li>
              <li className="list-inline-item">
                <span className="badge bg-light text-dark-blue fs-14 text-wrap mb-2">past client  <i className="fa-solid fa-xmark text-dark text-opacity-50 ms-1"></i></span>
              </li>
            </ul>
            <div className="htmlForm-check htmlForm-switch">
              <input className="htmlForm-check-input" type="checkbox" id="flexSwitchCheckReverse"/>
              <label className="htmlForm-check-label text-black-50" htmlFor="flexSwitchCheckReverse">DND (Opt out of marketing campaigns)</label>
            </div>
            </div>
          </div>
         
        </div>
        </div>
    </main>
   
    </div>
  )
}

export default Conversations