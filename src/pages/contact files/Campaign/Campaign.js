import React, { useEffect ,useState} from 'react'
import ContactHeader from '../ContactHeader'
import axios from "axios";

import Table from './Table';
import { Pagination } from "antd";

const Campaign = () => {
    const [userData, setUserData] = useState([
        {
            "name":" Trevor Sullivan",
            "created": "Fmar 20 2022 - 08:17 PM (PST)",

            "cantact_num": 2
        },
        {
            "name":"jesse king",
            "created": "may 10 2022 - 08:17 PM (PST)",

            "cantact_num": 1
        },
        {
            "name":"danald",
            "created": "Feb 20 2022 - 08:17 PM (PST)",

            "cantact_num": 4
        },
        {
            "name":"Sullivan",
            "created": "june 20 2022 - 08:17 PM (PST)",

            "cantact_num": 5
        },
        {
            "name":" Trevor",
            "created": "jan 20 2022 - 08:17 PM (PST)",

            "cantact_num": 7
        },
        {
            "name":"mr Sullivan",
            "created": "april 14 2022 - 08:17 PM (PST)",

            "cantact_num": 8
        },
        {
            "name":" Trevor Sullivan",
            "created": "july 2 2022 - 08:17 PM (PST)",

            "cantact_num": 3
        },
        {
            "name":" Trevor Sullivan",
            "created": "Feb 20 2022 - 08:17 PM (PST)",
           
            "cantact_num": 2
        },
        {
            "name":" Trevor Sullivan",
            "created": "Feb 20 2022 - 08:17 PM (PST)",

            "cantact_num": 5
        },
        {
            "name":" Trevor Sullivan",
            "created": "Feb 20 2022 - 08:17 PM (PST)",

            "cantact_num": 2,
            "link":"https://docs.google.com/spreadsheets/d/1BSsH04agSyMJfQup-9qiMs_mxQJhFVo4tl4fwvrnXjg/edit#gid=0"
        }
    ])
    const [total, setTotal] = useState("");
    const [page, setPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
  



    useEffect(() => {     
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
                       
                        <div class="card-body pt-1">
                            <div class="dataTable--custom">
                                <Table userData={currentPagepost}  />
                                
                            </div>
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
                    </div>
                </main>

            </div>
        </>
    )
}

export default Campaign