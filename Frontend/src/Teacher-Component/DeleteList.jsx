import React, { useContext, useState } from 'react'
import icon from '../assets/back-icon.png'
import { useNavigate, useParams } from 'react-router-dom'
import { valueProvider } from '../Context-Component/Provider'
import axios from 'axios'


export const DeleteList = () => {
  const { mainList, setMainList,deleteId } = useContext(valueProvider)
  const navigate = useNavigate()
  const { id } = useParams()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  // console.log(deleteId);

  const handleDelete = async () => {
    try {
     await axios.delete(`http://localhost:4000/api/delete/${id}`)
      .then((res)=>{
        if (res.data) {
          const deleteList = mainList.filter((item)=>{
            return deleteId !== item._id
          })

          setMainList(deleteList)
          setSuccess(true)

          setTimeout(()=>{
            setSuccess(false)
            navigate('/studentlist')
          }, 4000)
  
        }
      })
  
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
          <p className='py-5 text-center text-sky-600 font-thin text-3xl'>Delete Page</p>
          <div className='text-center'>
          {success ? <p className='lg:text-xl pb-2 text-green-700  font-thin'>Delete Successfully...</p> : <></>}
            {error ? <p className='lg:text-xl pb-2 text-red-700  font-thin'>Error :(</p> : <></>}

          </div>


          <div className='bg-transparent border-2 rounded  w-[55%]   mx-auto  px-5 py-5 '>
            <div className='flex flex-col gap-5'>
              <p className='text-center text-2xl text-white pt-8'>Are you sure  want to delete this list ?</p>
              <div className=' flex justify-evenly items-center gap-3 py-4'>
                <button onClick={handleDelete} className='bg-green-700 text-white px-10 py-2 rounded'>Yes</button>
                <button onClick={()=>navigate('/studentlist')} className='bg-sky-700 text-white px-10 py-2 rounded'>No</button>

              </div>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}
