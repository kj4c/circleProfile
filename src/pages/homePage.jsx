import profile from '../assets/profile-text.svg';
import picture from '../assets/astronaut.png';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const routeChange = (path) => {
        return () => navigate(path);
    }

    const wave = `
    <svg width="100%" height="100%" viewBox="0 0 1600 916" fill="none" preserveAspectRatio="xMinYMax meet" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.41046e-05 633.249C310.995 633.249 409.898 917.153 811 915.997C1211 915.997 1311 633.249 1600 633.249L1600 7.88413e-05L8.00793e-05 -6.10352e-05C8.00793e-05 -6.10352e-05 7.58333e-05 499.088 6.41046e-05 633.249Z" fill="#7D17FF" fill-opacity="0.75"/>
    </svg>
    `
    const wave2 = `
    <svg width="100%" height="100%" viewBox="0 0 1600 916" fill="none" preserveAspectRatio="xMinYMax meet" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.41046e-05 633.249C310.995 633.249 409.898 917.153 811 915.997C1211 915.997 1311 633.249 1600 633.249L1600 7.88413e-05L8.00793e-05 -6.10352e-05C8.00793e-05 -6.10352e-05 7.58333e-05 499.088 6.41046e-05 633.249Z" fill="#9154DE" fill-opacity="0.75"/>
    </svg>

    `

    const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(wave)}`;
    const svgDataUrl2 = `data:image/svg+xml,${encodeURIComponent(wave2)}`;

    return (
        <section className="relative w-screen bg-white overflow-hidden h-screen">
            <div className='w-full h-[1000px] absolute overflow-x-hidden'>
                <div className=' w-[6400px] h-[1000px] absolute lg:top-[-38vh] xl:top-[-22vh]  bg-repeat-x animate-waveMotionBounce' style={{backgroundImage: `url(${svgDataUrl})`}}>
                </div>
                <div className=' w-[6400px] h-[1000px] absolute lg:top-[-37vh] xl:top-[-21vh]  bg-repeat-x animate-waveMotion' style={{backgroundImage: `url(${svgDataUrl2})`}}>
                </div>
            </div>
            <div className='mt-[100px] flex justify-center items-center'>
                <div className='  flex flex-col'>
                    <p className='animate-slideRight ml-14  text-white text-titleText font-bold ml-50 z-30'>Welcome to KJ's</p>
                    <img className='mt-[-35px] my-[35px] animate-slideRight size-3/5 flex z-30' src={profile} />
                    <button onClick={routeChange('/circleProfile/aboutMe')} className='z-10 animate-popOut  transition-transform duration-300 transform hover:scale-[1.2] flex text-primary items-center ml-14 tracking-[10px] w-fit px-6 py-1 font-bold border-solid border-8 bg-white border-white rounded-full'>START <span><svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path></svg></span></button>
                </div>

                <div className='pl-[4rem]'>
                    <img className='animate-bouncing bg-homepage h-72 ' src = {picture}></img>
                </div>
            </div>

        </section>
    )
}

export default HomePage;