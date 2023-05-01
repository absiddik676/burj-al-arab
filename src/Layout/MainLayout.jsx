import React from 'react';
import Header from '../components/Header/Header';
import Rooms from '../components/Rooms/Rooms';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Rooms/>
        </div>
    );
};

export default MainLayout;