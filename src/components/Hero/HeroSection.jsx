import React from 'react';
import Logo from '../../assests/logo.png';
import Cards from './Cards';
import One from '../../assests/exe1.jpg';
import Two from '../../assests/exe2.jpg';
import Three from '../../assests/exe3.jpg';
import Four from '../../assests/exe4.jpg';
import Five from '../../assests/exe5.jpeg';
import Six from '../../assests/exe6.jpg';

const HeroSection = (props) => {
    const addToList = (add) => {
        props.setList(old => [...old, add]);
    }

    const cards = [
        {
            id: 1,
            image: One,
            title: 'Bench Press',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iure?',
            range: '20-25',
            time: 30,
            state: 0
        },
        {
            id: 2,
            image: Two,
            title: 'Seated Row',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iure?',
            range: '20-25',
            time: 45,
            state: 0
        },
        {
            id: 3,
            image: Three,
            title: 'Dumbell Curl',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iure?',
            range: '20-25',
            time: 40,
            state: 0
        },
        {
            id: 4,
            image: Four,
            title: 'Leg Press',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iure?',
            range: '20-25',
            time: 60,
            state: 0
        },
        {
            id: 5,
            image: Five,
            title: 'Barbell Squats',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iure?',
            range: '20-25',
            time: 50,
            state: 0
        },
        {
            id: 6,
            image: Six,
            title: 'Belly Crunch',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iure?',
            range: '20-25',
            time: 20,
            state: 0
        }
    ];
    
    return (
        <div className='w-[72%]'>
            <div className='mx-28 py-6'>
                <div className='flex items-center'>
                    <img src={Logo} alt="" className='w-[60px] mr-8' />
                    <h1 className='text-[#3731e6] font-bold text-3xl'>ULTRA-ACTIVE-CLUB</h1>
                </div>
                <p className='my-5 py-2 text-xl'>Select Today's Exercise</p>
                <div className='ml-7 grid grid-cols-3 gap-y-7 gap-x-7 justify-center items-center'>
                    {
                        cards.map( card => 
                            <Cards key={card.id} props={{card, addToList}}></Cards>        
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HeroSection;