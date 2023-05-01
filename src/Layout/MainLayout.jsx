import React from 'react';
import Header from '../components/Header/Header';
import Rooms from '../components/Rooms/Rooms';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;