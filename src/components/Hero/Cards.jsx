import React, { createContext, useState } from 'react';

export const CardContext = createContext();

const Cards = ({ props }) => {
    const [buttonState, setButtonState] = useState(false);
    
    const handleClick = () => {
        if (!buttonState) {
            setButtonState(!buttonState);
            props.addToList(props.card.time);
        }
    }
    
    return (
        <div className={buttonState ? 'bg-white w-[16rem] h-[20rem] rounded-md shadow-xl scale-105 duration-300'
                                    :'bg-white w-[16rem] h-[20rem] rounded-md shadow-xl hover:scale-105 duration-300'}>
            <div className='mx-3 py-3'>
                <div>
                    <img className='object-cover h-20 w-full mx-auto rounded-lg' src={props?.card?.image} alt="" />
                </div>
                <h2 className='font-bold text-xl pt-2'>{props?.card?.title}</h2>
                <p className='py-1 text-sm font-thin'>{props?.card?.desc}</p>
                <h4 className='py-2'>For Age: {props?.card?.range}</h4>
                <h4 className='pt-1 pb-3'>Time Required: {props?.card?.time} seconds</h4>
                <button className={buttonState ? 'bg-[#038923] text-white py-1 mx-auto w-full rounded-md':'bg-[#3731e6] text-white py-1 mx-auto w-full rounded-md'}
                        onClick={handleClick}>
                    {buttonState ? 'Added':'Add to list'}
                </button>
            </div>
        </div>
    );
};

export default Cards;