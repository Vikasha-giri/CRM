import React, {useEffect, useState} from 'react'
import ContactHeader from './ContactHeader'
import CardHeader from "./CardHeader"
import { Table } from 'antd'
const Restore = () => {

 const [data, setData] = useState([]);


useEffect(() =>{
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data =>{
    setData(data)
  }).catch((err) =>{
    console.log(err)
  })
},[])

const columns =[
    {
        key:"1",
        title:"id",
        dataIndex:"id"
    },
    {
        key:"2",
        title:"Name",
        dataIndex:"title",
        sorter:((a,b) =>{
            return a.title > b.title;
        })
    },
    {
        key:"3",
        title:"Contact",
        dataIndex:"userId"
    },
    {
        key:"4",
        title:"Status",
        dataIndex:"completed",
        render:(completed)=>{
            return <p>{completed? "completed": "pending"}</p>
        }
    }
]

  return (
    <>
    <div className="content-wrapper">
    <ContactHeader/>
    <main className="container-fluid py-3 ps-lg-3 pe-lg-4 px-3">
    <div className="card border-0 rounded-5 shadow bg-light-secondary overflow-hidden">
      <CardHeader />
      <Table
      columns={columns}
      dataSource={data}
      pagination={true}
      />
    </div>
    </main>
    </div>
    </>
  )
}

export default Restore