// import React, { Component } from "react";
// import { withRouter } from "react-router";
// import {
//   Space,
//   Table,
//   Dropdown,
//   Menu,
//   message,
//   Button,
//   Modal,
//   Input,
//   Form,
// } from "antd";
// import CardContainer from "./common/CardContainer";
// import "../styles/components/admins-table.scss";

// class Scores extends Component {
//   state = {
//     columns: [
//       { title: "نام دانشجو", dataIndex: "name", key: "name" },
//       { title: "شماره دانشجویی", dataIndex: "studentCode", key: "studentCode" },
//       { title: "نمره", key: "score", dataIndex: "score", render: (_, record) => {
//         return (
//           <Button onClick={()=>this.setState({edit:true})}>{record.score}</Button>
//         );
//       }, },
//     ],
//     student: [
//       {
//         name: "محمد نظری",
//         studentCode: "99121033111008",
//         score: "20",
//       },
//       {
//         name: "علی بکماز",
//         studentCode: "99121033111008",
//         score: "12",
//       },
//       {
//         name: "محمدرضا فیروزآبادی",
//         studentCode: "99121033111221",
//         score: "ندارد",
//       },
//       {
//         name: "مهدی رنجبر",
//         studentCode: "99121033345678",
//         score: "18",
//       },
//       {
//         name: "بنده خدا",
//         studentCode: "99121033989237",
//         score: "ندارد",
//       },
//     ],
//     addcourse: {
//       name: "",
//       code: "",
//       type: "",
//       unit: "",
//       speculative: "",
//       practicable: "",
//       required: "",
//     },
//     edit: false,
//   };

//   showAddAdminModal = () => {
//     this.setState({ addAdminModal: true });
//   };

//   closeAddAdminModal = () => {
//     this.setState({ addAdminModal: false });
//   };
//   handleScoreonChange = () =>{

//   }
//   editScore = () =>{

//   }

//   render() {
//     const { location, history } = this.props;
//     const course = location.pathname.split("/")[4];
//     const id = location.pathname.split("/")[5];

//     const { columns, student,edit } = this.state;
//     return (
//       <CardContainer>
//         <div className="admins-table-header">
//           <h4>لیست {course}</h4>
//           {edit && (
//               <Modal
//                 visible={edit}
//                 okText="ذخیره"
//                 cancelText="خروج"
//                 onCancel={() => this.setState({edit:false})}
//                 onOk={this.editScore}>
//                 <div className="flex-column" style={{ padding: 20 }}>
//                   <div className="flex-row">
//                     <div className="flex-column">
//                       {/* <label htmlFor="email">ایمیل جدید :</label> */}
//                       <Form>
//                         <Form.Item
//                           name="email"
//                           label="ایمیل جدید"
//                           rules={[

//                             {
//                               required: true,
//                               message: "Please input your E-mail!",
//                             },
//                           ]}
//                           wrapperCol={{
//                             offset: 0,
//                             span: 24,
//                           }}>
//                           <Input
//                             name="email"
//                             id="email"
//                             type="email"
//                             onChange={this.handleScoreonChange}
//                           />
//                         </Form.Item>
//                       </Form>
//                     </div>
//                   </div>
//                 </div>
//               </Modal>
//             )}
//         </div>
//         <Table columns={columns} dataSource={student} pagination={false} />
//       </CardContainer>
//     );
//   }
// }

// export default Scores;

import React, { Component } from "react";
import { useParams, withRouter } from "react-router";
import {
  Space,
  Table,
  Dropdown,
  Menu,
  message,
  Button,
  Modal,
  Input,
  Form,
} from "antd";
import CardContainer from "./common/CardContainer";
import "../styles/components/admins-table.scss";
import { useState } from "react";

const Scores = () => {
  const [student, setStudent] = useState([
    {
      name: "محمد نظری",
      studentCode: "99121032111008",
      score: "20",
    },
    {
      name: "علی بکماز",
      studentCode: "99121033111008",
      score: "12",
    },
    {
      name: "محمدرضا فیروزآبادی",
      studentCode: "99121033111221",
      score: "ندارد",
    },
    {
      name: "مهدی رنجبر",
      studentCode: "99121033345678",
      score: "18",
    },
    {
      name: "بنده خدا",
      studentCode: "99121033989237",
      score: "ندارد",
    },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent,setEditingStudent] = useState(null)


  const columns = [
    { title: "نام دانشجو", dataIndex: "name", key: "name" },
    { title: "شماره دانشجویی", dataIndex: "studentCode", key: "studentCode" },
    {
      title: "نمره",
      dataIndex: "score",
      key: "score",
      render: (_, record) => {
        return (
          <Button onClick={() => onEditStudent(record)}>{record.score}</Button>
        );
      },
    },
  ];

  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({...record})
  };
const resetEditing = () =>{
  setIsEditing(false)
  setEditingStudent(false)
}
const onScoreChange = () =>{

  if(editingStudent.score <= 20 && editingStudent.score >= -1){
    setStudent((pre)=>{
      return pre.map((item)=>{
        if(item.studentCode == editingStudent.studentCode){
          return editingStudent
        }else{
          return item
        }
      })
    })
    resetEditing()
  }
}
console.log(editingStudent)
  const { course, id } = useParams();

  return (
    <CardContainer>
      <div className="admins-table-header">
        <h4>لیست {course}</h4>
      </div>
      <Table columns={columns} dataSource={student} pagination={false} />
      <Modal
        visible={isEditing}
        onCancel={resetEditing}
        onOk={onScoreChange}
        okText="ثبت"
        cancelText="خروج">
          <div className="flex-column" style={{ padding: 20 }}>
          <div className="flex-row">
                    <div className="flex-column">
                     نام: {editingStudent?.name}
                    </div>
                    <div className="flex-column">
                    شماره دانشجویی: {editingStudent?.studentCode}
                     </div>
                  </div>
                  <div className="flex-row" style={{marginTop:"2rem"}}>
                    <div className="flex-column">
                      {/* <label htmlFor="email">ایمیل جدید :</label> */}
                      <Form>
                        <Form.Item
                          name="email"
                          label="ثبت نمره"
                          rules={[
   
                            {
                              required: true,
                              message: "Please input your E-mail!",
                            },
                          ]}
                          wrapperCol={{
                            offset: 0,
                            span: 16,
                          }}>
                          <Input
                            name="email"
                            id="email"
                            type="email" 
                            value={editingStudent?.score}
                            onChange={(event)=>setEditingStudent({...editingStudent,score:event.target.value})}           
                          />
                        </Form.Item>
                      </Form>
                    </div>
                  </div>
                </div>
        </Modal>
    </CardContainer>
  );
};

export default Scores;
