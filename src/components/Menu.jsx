import React, { createContext, useState } from 'react';
import HeroSection from './Hero/HeroSection';
import SideBar from './SideBar';

export const TimeContext = createContext();

const Menu = () => {
    const [list, setList] = useState([]);
    
    return (
        <div className='w-full mx-auto flex'>
            <HeroSection setList={setList}></HeroSection>
            <TimeContext.Provider value={list}>
                <SideBar></SideBar>
            </TimeContext.Provider>
        </div>
    );
};

export default Menu;