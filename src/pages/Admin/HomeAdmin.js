import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers, deleteUsers } from "../../redux/action";
import { Link } from "react-router-dom";
import { Table,  } from 'antd';
import { useNavigate } from 'react-router-dom'
export default function HomeAdmin() {
    const { Column } = Table;
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const { users } = useSelector((state) => ({
        users: state.data.users,
    }));
    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    const HandleDelete = (id) => {
        if (window.confirm("Please Confirm Delete Yes or No")) {
            dispatch(deleteUsers(id));
        }
    };
    const list = users && users.slice().reverse();
    return (
        <div>
             <Table
            size="small"
            dataSource={list}
            pagination={{ defaultPageSize: 10}}
            rowKey="id"
          >
            <Column
              title="Title"
              dataIndex="title"
              sorter={(a, b) => a.title - b.title}
            />
                <Column
              title="Price"
              dataIndex="price"
              sorter={(a, b) => a.Price - b.Price}
            />
                <Column
              title="Categories"
              dataIndex="categories"
              sorter={(a, b) => a.categories - b.categories}
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
                                    <td className="Delete" onClick={() => HandleDelete(user.id)}>Delete</td>
                                    <td className="Delete" onClick={() => navigate(`/editUser/${user.id}`)}>Edit</td>
                                </tr>
                            ))}
                    </tbody>
                </table>


            </> */}
        </div>
    );
}