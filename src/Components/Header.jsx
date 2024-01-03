import React, { useContext, useEffect, useState } from 'react'
import game from './../assets/Images/logo.png'
import {  HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from '../Context/ThemeContext';

const Header = () => {
    const [toggle, setToggle] = useState(true)
    const { theme, setTheme } = useContext(ThemeContext);

    

    return (
        <div className='flex items-center p-3'>
            <img src={game} width={60} height={60} alt='logo' />
            <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
                
                <label className='px-2 bg-transparent text-center w-full outline-none font-bold text-[18px]'> Game Listing App </label>
            </div>
            <div>
                {theme == 'light' ?
                    <HiMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                        onClick={() => {setTheme('dark'); localStorage.setTheme('theme' , 'dark')}} /> :
                    <HiSun className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                        onClick={() => {setTheme('light'); localStorage.setTheme('theme' , 'light')}} />}
            </div>
        </div>
    )
}

export default Header;