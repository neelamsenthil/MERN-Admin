import React from 'react'
import img from './assets/hero.png'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='bg-cover h-screen w-full ' style={{backgroundImage: `url(${img})`}}>
      <div className='h-screen w-full  bg-[rgb(2,132,199,0.5)] '>
        <div className='text-center pt-32 '>
          <p className='text-4xl lg:text-6xl text-white font-semibold font-sans'>We Ensure better education</p>
          <p className='pt-2 text-4xl lg:text-6xl text-white  font-thin'>for a better world</p>

          <div className='mt-20 flex justify-center items-center gap-8'>
            <button onClick={()=>navigate('/studentlogin')} className='bg-[rgb(255,255,255,0.8)] hover:bg-white px-2 py-2 rounded text-sky-700 font-semibold'>Student Login</button>
            <button onClick={()=>navigate('/teacherlogin')} className='text-white bg-transparent hover:border-orange-500 hover:text-orange-500   border-[1px] px-2 py-2 rounded'>Teacher Login</button>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default Home