import profile from '../assets/profile-text.svg';
import picture from '../assets/astro.png';

const HomePage = () => {
    return (
        <section className="relative w-screen bg-homepage overflow-hidden" style={{ height: 'calc(100vh - 5rem)'}}>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col'>
                    <p className='ml-14  text-white text-titleText font-bold ml-50'>Welcome to my</p>
                    <img className='animate-moveTop size-3/5 flex' src={profile} />
                    <button className='flex text-primary items-center ml-14 tracking-[10px] w-fit px-6 py-1 font-bold border-solid border-8 bg-white border-white rounded-full'>START <span><svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path></svg></span></button>
                </div>

                <div className='pl-6'>
                    <img className='animate-bouncing bg-homepage h-72 ' src = {picture}></img>
                </div>
            </div>
            <div className='flex justify-center items-center'>
            </div>
            <svg width="220%"  id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className=" top-waveTop absolute animate-waveMotion"><path d="M 0,600 L 0,225 C 88.35714285714286,270.2142857142857 176.71428571428572,315.42857142857144 307,334 C 437.2857142857143,352.57142857142856 609.5,344.5 756,311 C 902.5,277.5 1023.2857142857142,218.57142857142856 1133,200 C 1242.7142857142858,181.42857142857144 1341.357142857143,203.21428571428572 1440,225 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ffffff" fillOpacity="1"></path></svg>
            <svg width="220%"  id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className=" top-waveTop2 left-waveLeft absolute animate-waveMotion"><path d="M 0,600 L 0,225 C 88.35714285714286,270.2142857142857 176.71428571428572,315.42857142857144 307,334 C 437.2857142857143,352.57142857142856 609.5,344.5 756,311 C 902.5,277.5 1023.2857142857142,218.57142857142856 1133,200 C 1242.7142857142858,181.42857142857144 1341.357142857143,203.21428571428572 1440,225 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ffffff" fillOpacity="1"></path></svg>
            <div className="wave2"></div>
        </section>
    )
}

export default HomePage;