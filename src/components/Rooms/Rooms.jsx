import React from 'react';
import room1 from '../../assets/007660a_hb_ro_055.jpg'
import room2 from '../../assets/images.jpg'
import room3 from '../../assets/burj-al-arab-1-bedroom-panoramic_6-4_landscape.jpg'
import { FaBed,FaDollarSign } from 'react-icons/fa';
import { HiUsers } from "react-icons/hi2";
import { Link } from 'react-router-dom';
const Rooms = () => {
    return (
        <div className='flex justify-around mt-16'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-80' src={room1} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='flex'>
                    <p className='flex items-center gap-2 '> <FaBed /> 1</p>
                    <p className='flex items-center gap-2 '> <HiUsers /> 1</p>
                    <p className='flex items-center gap-2 '> <FaDollarSign /> 199</p>
                    <Link to='/book'><button className="btn btn-sm bg-blue-700">Book</button></Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-80' src={room2} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='flex'>
                    <p className='flex items-center gap-2 '> <FaBed /> 1</p>
                    <p className='flex items-center gap-2 '> <HiUsers /> 1</p>
                    <p className='flex items-center gap-2 '> <FaDollarSign /> 299</p>
                    <Link to='/book'><button className="btn btn-sm bg-blue-700">Book</button></Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-80' src={room3} alt="Shoes" /></figure>
                <div className="card-body">
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='flex'>
                    <p className='flex items-center gap-2 '> <FaBed /> 1</p>
                    <p className='flex items-center gap-2 '> <HiUsers /> 1</p>
                    <p className='flex items-center gap-2 '> <FaDollarSign /> 399</p>
                    <Link to='/book'><button className="btn btn-sm bg-blue-700">Book</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;