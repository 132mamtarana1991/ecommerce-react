import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProduct, deleteAdmin } from "../../redux/action";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
export default function HomeAdmin() {
  const { Column } = Table;
  let dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { users } = useSelector((state) => ({
    users: state.data.users,
  }));

  useEffect(() => {
    dispatch(allProduct());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Please Confirm Delete Yes or No")) {
      dispatch(deleteAdmin(id));
    }
  };
  const list = users && users.slice().reverse();
  return (
    <div className="container">
      <Table
        size="small"
        dataSource={list}
        pagination={{ defaultPageSize: 8 }}
        rowKey="id"
      >
        <Column
          title="Image"
          dataIndex="image"
          render={text => (
             <img src={text} style={{ width: '53px'}}/>
          )}
        />
        <Column
          title="Title"
          dataIndex="title"
          sorter={(a, b) => a.title.localeCompare(b.title)}
        />
        <Column
          title="Price"
          dataIndex="price"
          sorter={(a, b) => a.price - b.price}
        />
        <Column
          title="Categories"
          dataIndex="categories"
          sorter={(a, b) => a.categories.localeCompare(b.categories)}
        />
         <Column
          title="Delete"
          dataIndex="id"
          render={text => (
            <button onClick={() => handleDelete(text)}>Delete</button>
         )}
        />
        <Column
          title="editUser"
          dataIndex="id"
          render={text => (
            <button onClick={() => navigate(`/editUser/${text}`)}>Edit</button>
         )}
        />
      </Table>
      {/* <>
                <Link to="/AddUser">
                    <button style={{ background: "Green" }}> Add User</button>
                </Link>
                <table id="customers">
                    <tr>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    <tbody>
                        {list &&
                            list.map((user, index) => (
                                <tr key={index}>
                                    <td> {user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td className="Delete" onClick={() => handleDelete(user.id)}>Delete</td>
                                    <td className="Delete" onClick={() => navigate(`/editUser/${user.id}`)}>Edit</td>
                                </tr>
                            ))}
                    </tbody>
                </table>


            </> */}
    </div>
  );
}
