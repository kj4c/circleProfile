import wave from '../assets/wave.svg';
import picture from '../assets/astro.png';

const HomePage = () => {
    return (
        <section className="relative w-screen bg-primary overflow-hidden" style={{ height: 'calc(100vh - 7rem)'}}>
            <div className='flex justify-center items-center'>
                <p className='flex justify-center items-center text-white text-titleText font-bold ml-50'>Welcome to <br></br>my profile.</p>
                <div className='pl-6'>
                    <img className='bg-primary h-72 ' src = {picture}></img>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button className='text-primary border-solid border-8 bg-white border-white rounded-full'>START →</button>
            </div>
            <svg width="220%"  id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className=" top-waveTop left-waveLeft absolute animate-waveMotion"><path d="M 0,600 L 0,225 C 88.35714285714286,270.2142857142857 176.71428571428572,315.42857142857144 307,334 C 437.2857142857143,352.57142857142856 609.5,344.5 756,311 C 902.5,277.5 1023.2857142857142,218.57142857142856 1133,200 C 1242.7142857142858,181.42857142857144 1341.357142857143,203.21428571428572 1440,225 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ffffff" fillOpacity="1"></path></svg>
            <div className="wave2"></div>
        </section>
    )
}

export default HomePage;