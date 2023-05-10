import React from 'react';
import './Header.css';
import {  Link } from "react-router-dom";
import logo from '../.././logoAmzon.png'
import { useSelector,useDispatch } from 'react-redux';
import { FaLocationArrow,FaSearch,FaShoppingBag } from 'react-icons/fa';
export const Header = () => {
    const { user,basket } = useSelector((state) => state.data);
    let dispatch = useDispatch();

    return (
        <nav className='header'>
            <Link to="/"> <img className='header-logo' src={logo} /></Link>
            <div className='header-option' style={{ marginRight: '-10px' }}>
                <FaLocationArrow />
            </div>
            <div className='header-option'>
                <span className='header-option1'>Hello</span>
                <span className='header-option2'>Select u r Address</span>
            </div>
            <div className='search'>
                <select>
                    <option>All</option>
                </select>
                <input type="text" className="searchInput" />
                {/* <FcSearch/> */}
                <FaSearch className="searchIcon" />
            </div>
            <div className='header-nav'>
                <Link to={user ? '/' : '/login'} className="header-link">
                    <div className='header-option' >
                        <span className='header-option1'>{user ? user?.email : 'Hello Guest'}  </span>
                        <span className='header-option2'> {user ? 'Sign Out' : 'Sign in'}</span>
                    </div>
                </Link>
                <Link to="/order" className="header-link">
                    <div className='header-option'>
                        <span className='header-option1'>Return</span>
                        <span className='header-option2'>& orders</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header-link">
                    <div className='header-basket'>
                        <FaShoppingBag/>  
                        <span className='header-option2 basket-count'>{basket ? basket.length : 0}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}