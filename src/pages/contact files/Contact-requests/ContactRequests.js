import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "antd";
import ContactTable from "../Contact-requests/ContactTable"
import ContactHeader from '../ContactHeader'
const ContactRequests = () => {
  const [userData, setUserData] = useState([
    {
    "id" : 1,
    "status": "pending",
    "DateTime":20,
    "Type":"BULK UPDATE",
    "Created": 2,
    "Updated": 3,
    "Skipped": 0,
    "Failed": 2,
    "Deleted": 1
    },
    {
        "id" : 2,
        "status": "pending",
        "DateTime":10,
        "Type":"BULK UPDATE",
        "Created": 3,
        "Updated": 1,
        "Skipped": 4,
        "Failed": 5,
        "Deleted": 2
        },
        {
            "id" : 3,
            "status": "complete",
            "DateTime":14,
            "Type":"BULK UPDATE",
            "Created": 3,
            "Updated": 1,
            "Skipped": 4,
            "Failed": 10,
            "Deleted": 6
            },
            {
                "id" : 4,
                "status": "pending",
                "DateTime":14,
                "Type":"BULK UPDATE",
                "Created": 2,
                "Updated": 3,
                "Skipped": 4,
                "Failed": 10,
                "Deleted": 6
                },
                {
                    "id" : 5,
                    "status": "complete",
                    "DateTime":14,
                    "Type":"BULK UPDATE",
                    "Created": 3,
                    "Updated": 1,
                    "Skipped": 6,
                    "Failed": 7,
                    "Deleted": 0
                    },
                    {
                        "id" : 6,
                        "status": "pending",
                        "DateTime":14,
                        "Type":"BULK UPDATE",
                        "Created": 9,
                        "Updated": 5,
                        "Skipped": 8,
                        "Failed": 10,
                        "Deleted": 6
                        },
                        {
                            "id" : 7,
                            "status": "complete",
                            "DateTime":6,
                            "Type":"BULK UPDATE",
                            "Created": 2,
                            "Updated": 8,
                            "Skipped": 2,
                            "Failed": 6,
                            "Deleted": 5
                            }
    
] )
  const [total, setTotal] = useState("");
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);




  useEffect(() => {
          setUserData(userData);
          setTotal(userData.length);
      
  }, []);

  const IndexOfLastPage = page * postsPerPage;
  const IndexOfFirstPage = IndexOfLastPage - postsPerPage;
  const currentPagepost = userData.slice(IndexOfFirstPage,IndexOfLastPage)


  return (
    <>
    <div className="content-wrapper">
    <ContactHeader />
    <main className="container-fluid py-3 ps-lg-3 pe-lg-4 px-3">
        <div className="card border-0 rounded-5 shadow bg-light-secondary overflow-hidden">
        <ContactTable contreqData={currentPagepost}  />  
      <div className="d-flex justify-content-between mx-5 mb-4 ">
      <p>Showing 1 to 5 of 5 entries</p>
        <Pagination 
         pageSize={postsPerPage}
         total={total}
         current={page}
         onChange={(val) => setPage(val)}
         previousLabel={'Previous'}
         nextLabel={'Next'}
        />
        </div>
        </div>
        </main>
    </div>
            
    </>
  )
}

export default ContactRequests