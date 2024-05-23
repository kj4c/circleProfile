import picture from '../assets/profilepic.jpg';
import { useState } from 'react';
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { CSSTransition } from 'react-transition-group';
import '../styles/Homepage.css'

const data = [
    {
        id: 1,
        title: 'Introduction',
        content: `Hi! My name\'s Khye Jac but most people call me KJ! My profile was built based upon the design of the Circles \n App built by DevSoc. 
        I wanted to build this website with something that I am not familiar with which is TailwindCSS and SVGs,
        it took a long while to comprehend but I learnt a lot of new useful content!`
    },
    {
        id: 2,
        title: 'Age',
        content: 'I\'m currently 18 years old! My birthday is on the 14th of November 2005, please remember to wish me!'
    },
    {
        id: 3,
        title: 'Degree and Year',
        content: 'I am a second year currently enrolled in a Software Engineering degree.'
    },
    {
        id: 4,
        title: 'Courses I\'ve taken ',
        content: 'COMP1511\nCOMP1521\nCOMP1531\nCOMP2521\nCOMP3311\nCOMP3121\nSENG2011\nSENG2021'
    }
]
const AboutMe = () => {
    const [isIntroOpen, setIsIntroOpen] = useState({});

    const toggleIntro = (id) => {
        setIsIntroOpen((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <div>
            <div className='flex flex-col mx-50 items-center justify-center w-screen bg-secondary'>
                <div className='p-8 animate-fadeIn'>
                    <img className='border-solid border-8 border-primary rounded-full h-72 ' src = {picture}></img>
                    <p className='pt-5 text-5xl font-medium'>Khye Jac Low</p>
                </div>
            </div>
            {data.map((ele) => (
                <div key = {ele.id} className='my-5'>
                    <div className='animate-slideRight flex mx-5'>
                        <button  onClick={() => toggleIntro(ele.id)}>{isIntroOpen[ele.id] ? <FaAngleDown/> : <FaAngleRight/> }</button>
                        <h1 className='w-screen  border-b-1 py-3 pl-3 text-3xl font-medium'>{ele.title}</h1>
                    </div>
                    <CSSTransition in={isIntroOpen[ele.id]} timeout={200} classNames="my-node" unmountOnExit>
                        <p className='mx-9 pt-5'>{ele.content}</p>
                    </CSSTransition>
                </div>
            ))}
        </div>
    )
}
export default AboutMe;