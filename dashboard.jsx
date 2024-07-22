import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
 const Dashboard =()=>{
    const dataSource = [
        {
          "S.No": '1',
          "Case Name": 'VRAS ENTERPRISES',
          "Partner": 'SME-DTM',
          "Allocated Date": '27/03/2023',
          "Decision Date":'-',
         "Status":'login Reject',
         "Rejection Reason":'null',
         "Credit Manager":'null',
        },
        {
            "S.No": '2',
            "Case Name": 'STAR GLORY FABRICS',
            "Partner": 'SBL',
            "Allocated Date": '10/07/2023',
            "Decision Date":'10/07/2023',
           "Status":'Disbursed',
           "Rejection Reason":'null',
           "Credit Manager":'Umang Malik',
          },
          {
            "S.No": '3',
            "Case Name": 'MOURYA PACKAGINGS',
            "Partner": 'SME-DTM',
            "Allocated Date": '21/03/2023',
            "Decision Date":'-',
           "Status":'login Reject',
           "Rejection Reason":'null',
           "Credit Manager":'null',
          },
      ];
      
      const columns = [
        {
            title: 'S.No',
            dataIndex: 'S.No',
            key: 'S.No',
          },
        {
          title: 'Case Name',
          dataIndex: 'Case Name',
          key: 'Case Name',
        },
        {
          title: 'Partner',
          dataIndex: 'Partner',
          key: 'Partner',
        },
        {
          title: 'Allocated Date',
          dataIndex: 'Allocated Date',
          key: 'Allocated Date',
        },
        {
            title: 'Decision Date',
            dataIndex: 'Decision Date',
            key: 'Decision Date',
          },
          {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
          },
          {
            title: 'Rejection Reason',
            dataIndex: 'Rejection Reason',
            key: 'Rejection Reason',
          },
          {
            title: 'Credit Manager',
            dataIndex: 'Credit Manager',
            key: 'Credit Manager',
          },
          
      ];
      
      <Table dataSource={dataSource} columns={columns} />;
    return(
        <div >
            <div className="button">Dashboard
            <button><Link to={'/dashboard/add-new'}>Add New Item</Link></button>
         </div>
         <div>
         <Table dataSource={dataSource} columns={columns} />;
         </div>
        </div>
         
    );
 }
 export default Dashboard