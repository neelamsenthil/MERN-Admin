import React, { useContext, useState } from 'react'
import icon from '../assets/back-icon.png'
import { useNavigate, useParams } from 'react-router-dom'
import { valueProvider } from '../Context-Component/Provider'
import axios from 'axios'

const Edit = () => {
  const { mainList, setMainList, editName, setEditName, editAge, setEditAge, editCourse, setEditCourse, editYear, setEditYear, editId, setEditId } = useContext(valueProvider)
  const navigate = useNavigate()
  // console.log(editName);
  // console.log(editAge);
  // console.log(editCourse);
  // console.log(editYear);
  const { id } = useParams()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleUpdate = async () => {

    try {
      if (editName.trim() !== "" && editAge !== "" && editCourse.trim() !== "" && editYear !== "") {
        await axios.put(`http://localhost:4000/api/edit/${id}`, {
          name: editName,
          age: editAge,
          course: editCourse,
          year: editYear
        })
          .then((res) => {
            if (res.data) {
              const updateList = mainList.map((item) => {
                if (item._id == editId) {
                  item.name = editName
                  item.age = editAge
                  item.course = editCourse
                  item.year = editYear

                }
                return item

              })

              setMainList(updateList)
              setSuccess(true)

              setTimeout(() => {
                setSuccess(false)
                setEditName('')
                setEditAge('')
                setEditCourse('')
                setEditYear('')
                navigate('/list')
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
          <img onClick={() => navigate('/list')} className='cursor-pointer w-7 ' src={icon} alt="icon" />
        </div>

        <div className='pt-10'>

          <div className='bg-transparent border-2 rounded  w-[55%]   mx-auto  px-5 py-3 '>
            <p className='py-4 text-center text-sky-600 font-thin text-3xl'>Edit Details</p>
            {success ? <p className='lg:text-xl pb-2 text-green-700  font-thin'>Update Successfully...</p> : <></>}
            {error ? <p className='lg:text-xl pb-2 text-red-700  font-thin'>Error :(</p> : <></>}
            <div className='flex flex-col gap-5'>
              <input onChange={(e) => setEditName(e.target.value)} className='outline-none py-3 px-3 rounded bg-[rgb(255,255,255,0.9)] text-lg' type="text" placeholder='Enter Name' value={editName} />
              <input onChange={(e) => setEditAge(e.target.value)} className='outline-none py-3 px-3 rounded bg-[rgb(255,255,255,0.9)] text-lg' type="number" placeholder='Enter Age' value={editAge} />
              <input onChange={(e) => setEditCourse(e.target.value)} className='outline-none py-3 px-3 rounded bg-[rgb(255,255,255,0.9)] text-lg' type="text" placeholder='Enter Course' value={editCourse} />
              <input onChange={(e) => setEditYear(e.target.value)} className='outline-none py-3 px-3 rounded bg-[rgb(255,255,255,0.9)] text-lg' type="number" placeholder='Enter Year' value={editYear} />

              <div className='text-center py-4'>
                <button onClick={handleUpdate} className='bg-sky-700 text-white px-10 py-2 rounded'>Update</button>
              </div>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}

export default Edit