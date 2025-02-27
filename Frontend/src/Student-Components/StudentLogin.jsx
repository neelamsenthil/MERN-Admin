import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import icon from '../assets/back-icon.png'

const StudentLogin = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      if (mail.trim() !== "" && password.trim() !== "") {
        await fetch("http://localhost:4000/api/student/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email: mail, password: password })
        })
          .then((res) => {
            if (res.ok) {
              setSuccess(true)



              setTimeout(() => {
                setSuccess(false)
                navigate('/create')


              }, 4000)

            }
          })


      }
    } catch (error) {

      setError(true)
      console.log(error);


    }
  }


  return (
    <>
      <div className='bg-[#161513] h-screen  '>
        <div className='pl-5 pt-5 '>
          <img onClick={()=>navigate('/')} className='cursor-pointer w-7 ' src={icon} alt="icon" />
        </div>
        <div className='pt-44'>

          <div className='bg-transparent border-2 rounded  w-[55%]   mx-auto  px-5 py-3 '>
            <p className='py-4 text-center text-sky-600 font-thin text-3xl'>Student Login</p>
            {success ? <p className='lg:text-xl pb-2 text-green-700  font-thin'>Login Successfully...</p> : <></>}
            {error ? <p className='lg:text-xl pb-2 text-red-700  font-thin'>Error</p> : <></>}

            <div className='flex flex-col gap-5'>
              <input onChange={(e) => setMail(e.target.value)} className='outline-none py-3 px-3 rounded' type="email" name='email' placeholder='Enter email' value={mail} />
              <input onChange={(e) => setPassword(e.target.value)} className='outline-none py-3 px-3 rounded' type="password" name='password' placeholder='Enter Password' value={password} />
              <div className='text-center py-4'>
                <button onClick={handleClick} className='bg-sky-700 text-white px-10 py-2 rounded'>LogIn</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default StudentLogin