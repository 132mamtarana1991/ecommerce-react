import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { addUsers } from '../../redux/action';
import { useDispatch } from 'react-redux'
const AddUser = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [nameError, setErrorName] = useState('')
    let dispatch = useDispatch();


    const [user, setUser] = useState({
        title: "",
        price: "",
        categories: "",
    });

    const { title, price, categories } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        if (!title || !price || !categories) {
            setError('Please required')
        } else if (!title.match('^[a-zA-Z ]*$')) {
            setErrorName('Please Only Charchter')
        }
        else {
            dispatch(addUsers(user))
            navigate('/admin')
            setError('')
        }
    };

    return (
        <div className="container">
            <button onClick={() => navigate('/')} style={{ background: "red" }}>BackToHome</button>
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <span style={{ color: 'red', textAlign: 'center' }}>{error && error}</span>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="title"
                            value={title}
                            onChange={e => onInputChange(e)}
                        />
                        {nameError && nameError}
                    </div>

                    <div className="form-group">
                        <input
                            type="price"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="price"
                            value={price}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your categories Number"
                            name="categories"
                            value={categories}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;