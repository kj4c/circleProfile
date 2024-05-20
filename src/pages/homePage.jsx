import picture from '../assets/profile_pic.jpg';

const HomePage = () => {
    return (
        <div>
            <img className='self-center rounded-full h-96 pl-50% p ' src = {picture}></img>
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