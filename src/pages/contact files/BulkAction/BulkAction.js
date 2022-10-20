import React, { useEffect, useState } from 'react'
import BulkTable from './BulkTable';
import axios from "axios";
import { Pagination } from "antd";
import ContactHeader from '../ContactHeader';


const BulkAction = () => {
  const [userData, setUserData] = useState([
      {
        "id": 1,
        "status": "pending",
        "Bulk_Operation": "Bulk Campaign",
        "name": "Cast Out",
        "Created": "Feb 21, 2022",
        "User": "Walter Hughes",
        "Completed": "Feb 21, 2022",
        "Statistics": "Show Stats",
        "Actions": 1
      },
      {
        "id": 2,
        "status": "complete",
        "Bulk_Operation": "aulk Campaign",
        "name": "aast Out",
        "Created": "mar 1, 2022",
        "User": "Walter Hughes",
        "Completed": "june 21, 2022",
        "Statistics": "hide Stats",
        "Actions": 1
      },
      {
        "id": 3,
        "status": "pending",
        "Bulk_Operation": "culk Campaign",
        "name": "sast Out",
        "Created": "jan 5, 2022",
        "User": "Walter Hughes",
        "Completed": "oct 5, 2022",
        "Statistics": "Show Stats",
        "Actions": 1
      },
      {
        "id": 4,
        "status": "complete",
        "Bulk_Operation": "Bulk Campaign",
        "name": "Cast Out",
        "Created": "Feb 01, 2022",
        "User": "Walter Hughes",
        "Completed": "set 2, 2022",
        "Statistics": "hide Stats",
        "Actions": 1
      },
      {
        "id": 5,
        "status": "pending",
        "Bulk_Operation": "Bulk Campaign",
        "name": "Cast Out",
        "Created": "Feb 21, 2022",
        "User": "Walter Hughes",
        "Completed": "Feb 21, 2022",
        "Statistics": "Show Stats",
        "Actions": 1
      },
      {
        "id": 6,
        "status": "pending",
        "Bulk_Operation": "Bulk Campaign",
        "name": "Cast Out",
        "Created": "Feb 21, 2022",
        "User": "Walter Hughes",
        "Completed": "Feb 21, 2022",
        "Statistics": "Show Stats",
        "Actions": 1
      },
      {
        "id": 7,
        "status": "pending",
        "Bulk_Operation": "Bulk Campaign",
        "name": "Cast Out",
        "Created": "Feb 21, 2022",
        "User": "Walter Hughes",
        "Completed": "Feb 21, 2022",
        "Statistics": "Show Stats",
        "Actions": 1
      }

    
  ])
  const [total, setTotal] = useState("");
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);



  useEffect(() => {
      setUserData(userData);
      setTotal(userData.length);


 
  }, []);

  const IndexOfLastPage = page * postsPerPage;
  const IndexOfFirstPage = IndexOfLastPage - postsPerPage;
  const currentPagepost = userData.slice(IndexOfFirstPage, IndexOfLastPage)

  return (
    <>
      <div className="content-wrapper">
        <ContactHeader />
        <main className="container-fluid py-3 ps-lg-3 pe-lg-4 px-3">
          <div className="card border-0 rounded-5 shadow bg-light-secondary overflow-hidden">
          <BulkTable BulkData={currentPagepost} />
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

export default BulkAction