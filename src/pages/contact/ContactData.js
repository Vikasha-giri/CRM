import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "antd";
import Contact from "./Contact"
import ContactHeader from "../contact files/ContactHeader"
import 'antd/dist/antd.min.css';


const CotactData = () => {
    const [userData, setUserData] = useState([
        {
            "name":" Trevor Sullivan",
            "Phone": "(951) 537-3286",
            "email": "depnaw@ekradtol.co.uk",
            "created": "Feb 20 2022 - 08:17 PM (PST)",
            "last_Activity":"1 week ago ",
            "tag": "chartes wilson complete inactive - cash out refinance "
        },
        {
            "name":"jesse king",
            "Phone": "(951) 537-3286",
            "email": "depnaw@ekradtol.co.uk",
            "created": "Feb 20 2022 - 08:17 PM (PST)",
            "last_Activity":"1 week ago ",
            "tag": "chartes wilson complete inactive - cash out refinance "
        },
        {
            "name":"danald",
            "Phone": "(951) 537-3286",
            "email": "depnaw@ekradtol.co.uk",
            "created": "Feb 20 2022 - 08:17 PM (PST)",
            "last_Activity":"1 week ago ",
            "tag": "chartes wilson complete inactive - cash out refinance "
        },
        {
            "name":"Sullivan",
            "Phone": "(951) 537-3286",
            "email": "depnaw@ekradtol.co.uk",
            "created": "Feb 20 2022 - 08:17 PM (PST)",
            "last_Activity":"1 week ago ",
            "tag": "chartes wilson complete inactive - cash out refinance "
        },
        {
            "name":" Trevor",
            "Phone": "(951) 537-3286",
            "email": "depnaw@ekradtol.co.uk",
            "created": "Feb 20 2022 - 08:17 PM (PST)",
            "last_Activity":"1 week ago ",
            "tag": "chartes wilson complete inactive - cash out refinance "
        },
        {
            "name":"mr Sullivan",
            "Phone": "(951) 537-3286",
            "email": "depnaw@ekradtol.co.uk",
            "created": "Feb 20 2022 - 08:17 PM (PST)",
            "last_Activity":"1 week ago ",
            "tag": "chartes wilson complete inactive - cash out refinance "
        },
        {
            "name":" Trevor Sullivan",
            "Phone": "(951) 537-3286",
            "email": "depnaw@ekradtol.co.uk",
            "created": "Feb 20 2022 - 08:17 PM (PST)",
            "last_Activity":"1 week ago ",
            "tag": "chartes wilson complete inactive - cash out refinance "
        },
        {
            "name":" Trevor Sullivan",
            "Phone": "(951) 537-3286",
            "email": "depnaw@ekradtol.co.uk",
            "created": "Feb 20 2022 - 08:17 PM (PST)",
            "last_Activity":"1 week ago ",
            "tag": "chartes wilson complete inactive - cash out refinance "
        },
        {
            "name":" Trevor Sullivan",
            "Phone": "(951) 537-3286",
            "email": "depnaw@ekradtol.co.uk",
            "created": "Feb 20 2022 - 08:17 PM (PST)",
            "last_Activity":"1 week ago ",
            "tag": "chartes wilson complete inactive - cash out refinance "
        },
        {
            "name":" Trevor Sullivan",
            "Phone": "(951) 537-3286",
            "email": "depnaw@ekradtol.co.uk",
            "created": "Feb 20 2022 - 08:17 PM (PST)",
            "last_Activity":"1 week ago ",
            "tag": "chartes wilson complete inactive - cash out refinance ",
            "link":"https://docs.google.com/spreadsheets/d/1BSsH04agSyMJfQup-9qiMs_mxQJhFVo4tl4fwvrnXjg/edit#gid=0"
        }
    ])
    const [total, setTotal] = useState("");
    const [page, setPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
  



    useEffect(() => {
        // const getdata = async () =>{
    
        //     const response = await axios.get(
        //         "http://localhost:5000/api/users"
        //     );
           console.log(userData)
            //  setUserData(userdata);
            setTotal(userData.length);
          
            
    //     }
    //    getdata()
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
            <Contact userData={currentPagepost} setUserData={() => setUserData()} />  
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
    
        
    );
};

export default CotactData;
