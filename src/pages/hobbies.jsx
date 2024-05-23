import profile from '../assets/profilepic.jpg'
import boulder from '../assets/boulderer.jpg'
import vbpic from '../assets/volleyball.jpg'
import rt from '../assets/roadtrip.jpeg'

const volleyball = `I stared playing volleyball in middle school, however, 
I was pretty short and would be a resident bench-warmer. 
I made a promise to myself that when I grew taller, 
I would make it into the highschool team and show off my skills!
 However, Covid hit and I had to spend my high school days at home, 
 but now that im in university, im actively playing volleyball again 
 and growing my interest for the game like I once had.`
 
const roadtrip = `I love roadtrips a lot! Being able to go out and venture into
some place where I've never been and explore nature is my favourite way to
destress. It is even more wonderful if you bring the right company. I am always
down to go on a roadtrip and I wish I could dropout and become a professional
roadtripist(?).`
const Hobbies = () => {
    return (
        <div className='flex flex-col w-[100%] overflow-hidden'>
            <div className="flex p-8 mx-[10%] h-1/3 border-b-1 animate-fadeIn">
                <div className='flex justify-center w-1/3'>
                    <img src={boulder} className=' border-solid border-8 border-secondary rounded-full h-60 '></img>
                </div>
                <div className="flex flex-col w-2/3 pr-[6rem] ">
                    <h1 className='border-b-1 pt-5 text-5xl font-medium'>Bouldering<br></br></h1>
                    <p className='pt-5'>I, like many other people in Computer Science enjoy bouldering a lot, although I have only been bouldering around 10 times, each time my love for it grows larger and larger!</p>
                </div>
            </div>     
            <div className='w-screen bg-secondary'>
                <div className=" flex justify-end mx-[10%] p-8 m-5 h-1/3 border-b-1 animate-fadeIn ">
                    <div className="flex flex-col w-2/3 pl-[6rem]">
                        <h1 className='border-b-1 border-primary pt-5 text-5xl font-medium'>Volleyball<br></br></h1>
                        <p className='pt-5'>{volleyball}</p>
                    </div>
                    <div className='flex justify-center w-1/3 '>
                        <img src={vbpic} className=' border-solid border-8 border-primary rounded-full h-60 '></img>
                    </div>
                </div>
            </div>      
          
            <div className="flex p-8 mx-[10%] h-1/3 animate-fadeIn">
                <div className='flex justify-center w-1/3 '>
                    <img src={rt} className=' border-solid border-8 border-secondary rounded-full h-60 '></img>
                </div>
                <div className="flex flex-col w-2/3 pr-[6rem] ">
                    <h1 className='border-b-1 pt-5 text-5xl font-medium'>Roadtrips<br></br></h1>
                    <p className='pt-5'>{roadtrip}</p>
                </div>
            </div>
        </div>
    )
}

export default Hobbies;