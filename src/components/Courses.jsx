import { Button, Table } from "antd";
import Item from "antd/lib/list/Item";
import type { ColumnsType } from "antd/lib/table";
import React, { useState } from "react";
import BackBtn from "./BackBtn";

const columns = [
  {
    title: "درس",
    dataIndex: "name",
  },
  {
    title: "کد درس",
    dataIndex: "code",
  },
  {
    title: "نوع درس",
    dataIndex: "type",
  },
  {
    title: "واحد",
    dataIndex: "unit",
  },
  {
    title: "واحد تئوری",
    dataIndex: "speculative",
  },
  {
    title: "واحد عملی",
    dataIndex: "practicable",
  },
  {
    title: "پیش نیازها",
    dataIndex: "required",
  },
];
var data = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `درس ${i}`,
    code: 32,
    type: "عمومی",
    unit:3,
    speculative:2,
    practicable:1,
    required:"ریاضی 1"
  });
}

const Courses = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [myData,setMyData] = useState(data)
  const filteredData = []
  const start = () => {
    setLoading(true); // ajax request after empty completing

    // setMyData()
// const y =[]
    // for(const selected in selectedRowKeys){
        
    //  myData.filter((item)=>{
    //     return !selected.includes(({key})=>item.key === key) && y.push(item)
    //    })
    //    console.log(y)
    //    setMyData()
    // }


    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    // console.log("selectedRowKeys deleted: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };


  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <BackBtn to="/student" />
      <div>
        <div
          style={{
            marginBottom: 16,
          }}>
          <Button
            type="primary"
            onClick={start}
            disabled={!hasSelected}
            loading={loading}>
            Reload
          </Button>
          <span
            style={{
              marginLeft: 8,
            }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={myData}
        />
      </div>
    </div>
  );
};

export default Courses;
