import React, { useContext, useEffect, useState } from 'react';
import { GrLocation } from 'react-icons/gr';
import Photo from '../assests/Omee8.png';
import { TimeContext } from './Menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SideBar = () => {
    let receivedArray = useContext(TimeContext);

    const notify = () => {
        toast(`Congratulations! you have worked out for ${Math.floor((time + breakTime) / 60)}m ${(time + breakTime) % 60}s`);
    }

    let time = 0;
    receivedArray.forEach(num => time += num);

    const [breakTime, setBreakTime] = useState(0);
    const [noBreakTimes, setNoBreakTimes] = useState(0);

    const breakTimeAdder = (event) => {
        let val = event.currentTarget.id;
        
        setNoBreakTimes(noBreakTimes + 1);
        setBreakTime(breakTime + val * 10);
    };

    useEffect(() => {
        
    }, [receivedArray]);

    return (
        <div className='text-black h-screen w-[28%] bg-white ml-auto'>
            {/* user section */}
            <div className='flex bg-white mx-5 py-4 px-4 rounded-md'> 
                <img className='w-[90px] h-auto ml-2 mr-10' src={Photo} alt="/" />
                <div>
                    <h1 className='text-[20px] font-bold py-4'>Syed Omee</h1>
                    <div className='flex'>
                        <GrLocation size={20}></GrLocation>
                        <p className='ml-2 text-[gray]'>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            {/* bioM section */}
            <div className='bg-[#E6E5E5] mx-5 rounded-xl py-5 my-6 flex justify-around items-center'>
                <div className='flex flex-col text-center font-bold text-xl'>
                    74kg
                    <span className='font-thin text-sm'>Weight</span>
                </div>
                <div className='flex flex-col text-center font-bold text-xl'>
                    178cm
                    <span className='font-thin text-sm'>Height</span>
                </div>
                <div className='flex flex-col text-center font-bold text-xl'>
                    27yrs
                    <span className='font-thin text-sm'>Age</span>
                </div>
            </div>
            {/* breakHeadline section */}
            <div className='text-black mx-5 text-[1.5rem]'>
                Add A Break
            </div>
            {/* break section */}
            <div className='bg-[#E6E5E5] mx-5 px-5 rounded-xl py-8 my-6 inline-grid grid-cols-5 gap-x-5'>
                <button id='1' onClick={breakTimeAdder}>
                    <div className='w-16 h-16 rounded-full bg-white hover:bg-[#3731e6] hover:text-white flex justify-center items-center'>
                        <span>
                            10s
                        </span>
                    </div>
                </button>

                <button id='2' onClick={breakTimeAdder}>
                    <div className='w-16 h-16 rounded-full bg-white hover:bg-[#3731e6] hover:text-white flex justify-center items-center'>
                        <span>
                            20s
                        </span>
                    </div>  
                </button>

                <button id='3' onClick={breakTimeAdder}>
                    <div className='w-16 h-16 rounded-full bg-white hover:bg-[#3731e6] hover:text-white flex justify-center items-center'>
                        <span>
                            30s
                        </span>
                    </div>
                </button>

                <button id='4' onClick={breakTimeAdder}>
                    <div className='w-16 h-16 rounded-full bg-white hover:bg-[#3731e6] hover:text-white flex justify-center items-center'>
                        <span>
                            40s
                        </span>
                    </div>
                </button>

                <button id='5' onClick={breakTimeAdder}>
                    <div className='w-16 h-16 rounded-full bg-white hover:bg-[#3731e6] hover:text-white flex justify-center items-center'>
                        <span>
                            50s
                        </span>
                    </div>
                </button>
            </div>
            {/* excrcise section */}
            <div className='text-black mx-5 text-[1.5rem] mt-8'>
                Exercise Details
            </div>
            {/* time section */}
            <div className='mx-5'>
                <div className='bg-[#E6E5E5] px-5 rounded-xl py-5 my-6 flex justify-between'>
                    <div className='w-32'>
                        <span className='text-xl'>
                            Exercise Time
                        </span>
                    </div>
                    <span className='text-green-800 font-bold'>x{receivedArray.length}</span>
                    <div className='w-32'>
                        <div className='text-xl text-right text-[#a30909d6]'>{Math.floor(time / 60)}m {time % 60}s</div>
                    </div>
                </div>
                <div className='bg-[#E6E5E5] px-5 rounded-xl py-5 my-6 flex justify-between'>
                    <div className='w-32'>
                        <span className='text-xl'>Break Time</span>
                    </div>
                    <span className='text-green-800 font-bold'>x{noBreakTimes}</span>
                    <div className='w-32'>
                        <div className='text-xl text-right text-[#a30909d6]'>{Math.floor(breakTime / 60)}m {breakTime % 60}s</div>
                    </div>
                </div>
            </div>
            <div className='mx-5'>
                <button
                    onClick={notify} 
                    className='bg-[#3731e6] w-full rounded-md font-medium my-6 py-3 text-white'>
                        Activity Completed
                </button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default SideBar;