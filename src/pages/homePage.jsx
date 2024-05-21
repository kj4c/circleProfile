import picture from '../assets/profilepic.jpg';
import { useState } from 'react';
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { CSSTransition } from 'react-transition-group';
import '../styles/Homepage.css'

const HomePage = () => {
    const [isIntroOpen, setIsIntroOpen] = useState(false);

    const toggleIntro = () => {
        setIsIntroOpen(!isIntroOpen);
    }

    return (
        <div>
            <div className='flex flex-col mx-50 items-center justify-center w-screen bg-secondary'>
                <div className='p-8 animate-fadeIn'>
                    <img className='border-solid border-8 border-primary rounded-full h-72 ' src = {picture}></img>
                    <p className='pt-5 text-5xl font-medium'>Khye Jac Low</p>
                </div>
            </div>
            <div className='flex'>
                <button className='pl-3' onClick={toggleIntro}>{isIntroOpen ? <FaAngleDown/> : <FaAngleRight/> }</button>
                <h1 className='py-3 pl-3 text-3xl font-medium'>Introduction</h1>
            </div>
            <CSSTransition in={isIntroOpen} timeout={200} classNames="my-node" unmountOnExit>
                <p className='border-t-2 mx-5 pt-5'>Hi! My name's Khye Jac but most people call me <span className='font-bold'>KJ</span>! My profile was built based upon the design of the Circles 
                App built by DevSoc</p>
            </CSSTransition>
            <h1 className='py-3 pl-5 text-3xl font-medium'>Age</h1>
            <p>18</p>
            <h1 className='py-3 pl-5 text-3xl font-medium'>Degree and Year</h1>
            <p>Second Year Software Engineering</p>
            <h1 className='py-3 pl-5 text-3xl font-medium'>Comp Courses</h1>
            <ul>
                <li>COMP1511</li>
                <li>COMP1521</li>
                <li>COMP1531</li>
                <li>COMP2521</li>
                <li>COMP3311</li>
                <li>COMP3121</li>
                <li>SENG2011</li>
                <li>SENG2021</li>
            </ul>
        </div>
    )
}

export default HomePage;