import React, { useContext } from 'react';
import bg from '../../assets/306949.jpg'
import { Link } from 'react-router-dom';
import { AuthContexApi } from '../../AuthContext/Provider';
const Header = () => {
    const {user} = useContext(AuthContexApi)
     return (
        <div className='bg-hero w-full h-56 bg-cover bg-center bg-no-repeat'>
            <div className="navbar text-white font-semibold text-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>

                    </div>
                    <ul className="menu menu-horizontal flex gap-7 px-1 ml-9">
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Room</Link>
                        {
                            user ? <button>Log out</button> : <Link> Login</Link>
                        }
                        
                        
                    </ul>
                </div>
            
                
            </div>
            <h1 className='text-5xl text-gray-400 text-center font-semibold mt-9'>Burj Al Arab</h1>
            <h1 className='text-5xl text-gray-400 text-center font-semibold'>A global icon of Arabian luxury</h1>
        </div>
    );
};

export default Header;