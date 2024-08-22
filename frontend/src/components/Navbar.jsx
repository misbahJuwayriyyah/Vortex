import React, { useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink , Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
//Along with using useLocation,also look at the classNames of the espective list item when clicked, it'll show "active" so you can also use it to underline the respective item by using hidden in the classname of hr and then moving to index.css and adding :
//a.active hr{
// display:block;
//}
const Navbar = () => {
    const location = useLocation();
    const [visible,setVisible]=useState(false);
    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <img src={assets.logo} alt="vortex-logo" />
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    {location.pathname==='/'?<hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>:""}
                </NavLink>
                <NavLink to='/collection' className="flex flex-col items-center gap-1">
                    <p>COLLECTION</p>
                    {location.pathname==='/collection'?<hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>:""}
                </NavLink>
                <NavLink to='about' className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    {location.pathname==='/about'?<hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>:""}
                </NavLink>
                <NavLink to='/contact' className="flex flex-col items-center gap-1">
                    <p>CONTACT</p>
                    {location.pathname==='/contact'?<hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>:""}
                </NavLink>     
            </ul>

            <div className="flex items-center gap-6">
                <img src={assets.search_icon} alt="serach-icon" className='w-5 cursor-pointer'/>
                {/*We probably created this div to display a drop down menu when hovered*/}
                <div className="group relative">
                    <img src={assets.profile_icon} alt="profile-icon" className='w-5 min-w-5 cursor-pointer'/>
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black">Orders</p>
                            <p className="cursor-pointer hover:text-black">Log Out</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} alt="cart-icon" className='w-5 min-w-5 cursor-pointer'/>
                    <p className='absolute right-[-7px] bottom-[7px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>1</p>
                </Link>


                <img onClick={()=>{setVisible(true)}} src={assets.menu_icon} alt="menu" className='w-5 cursor-pointer sm:hidden'/>
            </div>

            {/*Side bar menu for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible===true?'w-full':'w-0'}`}>
                <div className="flex flex-col text-gray-600 cursor-pointer">
                    <div onClick={()=>{setVisible(false)}} className="flex items-center gap-4 p-3">
                        <img src={assets.dropdown_icon} alt="back-icon" className='h-4 rotate-180' />
                        <p>Back</p>
                    </div>
            
                    <NavLink onClick={()=>{setVisible(false)}} to="/" className={'py-2 pl-6 border'}>HOME</NavLink>
                    <NavLink onClick={()=>{setVisible(false)}} to="/collection" className={'py-2 pl-6 border'}>COLLECTION</NavLink>
                    <NavLink onClick={()=>{setVisible(false)}} to="/about" className={'py-2 pl-6 border'}>ABOUT</NavLink>
                    <NavLink onClick={()=>{setVisible(false)}} to="/contact" className={'py-2 pl-6 border'}>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
