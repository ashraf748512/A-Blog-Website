import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

const LogoutBtn = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        }).catch((error) => {
            console.error("Logout failed:", error);
        });
    };

    return (
        <button 
            className="inline-block px-6 py-2 duration-200 bg-red-500 text-white rounded-full hover:bg-red-600" 
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
};

export default LogoutBtn;
