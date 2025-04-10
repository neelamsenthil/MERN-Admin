import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import icon from '../assets/back-icon.png'
import { valueProvider } from '../Context-Component/Provider'
import axios from 'axios'

const CreatePage = () => {
  const { mainList, setMainList, name, setName, age, setAge, course, setCourse, year, setYear } = useContext(valueProvider)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  // console.log(mainList);
  

  const handleCreate = async () => {
    try {
      if (name.trim() !== "" && age.trim() !== "" && course.trim() !== "" && year.trim() !== "") {
        await axios.post("http://localhost:4000/api/create", {
          name: name,
          age: age,
          course: course,
          year: year
        })
        .then((res)=>{
          setMainList([...mainList, res.data])
          setSuccess(true)

          setTimeout(()=>{
            setSuccess(false)
            setName('')
            setAge('')
            setCourse('')
            setYear('')
            navigate(`/list/${res.data._id}`)
          }, 4000)
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
          <img onClick={() => navigate('/')} className='cursor-pointer w-7 ' src={icon} alt="icon" />
        </div>

        <div className='pt-10'>

          <div className='bg-transparent border-2 rounded  w-[55%]   mx-auto  px-5 py-3 '>
            <p className='py-4 text-center text-sky-600 font-thin text-3xl'>Create Details</p>
            {success ? <p className='lg:text-xl pb-2 text-green-700  font-thin'>Create Successfully...</p> : <></>}
            {error ? <p className='lg:text-xl pb-2 text-red-700  font-thin'>Error :(</p> : <></>}
            <div className='flex flex-col gap-5'>
              <input onChange={(e) => setName(e.target.value)} className='outline-none py-3 px-3 rounded bg-[rgb(255,255,255,0.9)] text-lg' type="text" placeholder='Enter Name' value={name} />
              <input onChange={(e) => setAge(e.target.value)} className='outline-none py-3 px-3 rounded bg-[rgb(255,255,255,0.9)] text-lg' type="number" placeholder='Enter Age' value={age} />
              <input onChange={(e) => setCourse(e.target.value)} className='outline-none py-3 px-3 rounded bg-[rgb(255,255,255,0.9)] text-lg' type="text" placeholder='Enter Course' value={course} />
              <input onChange={(e) => setYear(e.target.value)} className='outline-none py-3 px-3 rounded bg-[rgb(255,255,255,0.9)] text-lg' type="number" placeholder='Enter Year' value={year} />

              <div className='text-center py-4'>
                <button onClick={handleCreate} className='bg-sky-700 text-white px-10 py-2 rounded'>Add</button>
              </div>
            </div>
          </div>


        </div>
      </div>


    </>
  )
}

export default CreatePage