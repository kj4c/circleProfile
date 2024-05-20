import picture from '../assets/profilepic.jpg';

const HomePage = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img className=' border-solid border-4 border-primary mx-50 rounded-full h-72' src = {picture}></img>
            </div>
            <h1>Name</h1>
            <p>Khye Jac Low</p>
            <h1>Age</h1>
            <p>18</p>
            <h1>Degree and Year</h1>
            <p>Second Year Software Engineering</p>
            <h1>Comp Courses</h1>
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