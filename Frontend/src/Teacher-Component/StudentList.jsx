import React, { useContext, useEffect } from 'react'
import { LucideDelete } from 'lucide-react'
import icon from '../assets/back-icon.png'
import deleteImg from '../assets/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'
import { useNavigate } from 'react-router-dom'
import { valueProvider } from '../Context-Component/Provider'
import axios from 'axios'

const StudentList = () => {
  const { mainList, setMainList, setDeleteId } = useContext(valueProvider)
  const navigate = useNavigate()


  useEffect(() => {
    getStudentList()
    // console.log(mainList);

  }, [])

  const getStudentList = async () => {
    try {
      await axios.get("http://localhost:4000/api")
        .then((res) => {
          setMainList(res.data)
        })

    } catch (error) {
      console.log(error);


    }
  }

  const handleClick = (id) => {
    setDeleteId(id)
    navigate(`/delete/${id}`)

  }

  return (
    <>

      <div className='bg-[#161513] h-screen'>
        <div className='pl-5 pt-5'>
          <img onClick={() => navigate('/')} className='w-7 cursor-pointer' src={icon} alt="icon" />
        </div>
        <div className='text-center pt-5'>
          <p className='text-center text-sky-600 font-thin text-3xl'>Student List</p>
        </div>

        {mainList == '' ? <div className='mx-10 lg:mx-20 pt-10 lg:pt-20'><p className='text-xl text-center lg:text-2xl text-white '>Empty List :(</p></div> :



          <table className='border-2 mx-auto mt-20 text-white w-[55%]   '>
            <thead className='border-2 '>
              <tr className='text-2xl '>
                <th className='border-2 px-2 py-3'>no</th>
                <th className='border-2 px-2'>name</th>
                <th className='border-2 px-2'>age</th>
                <th className='border-2 px-2'>Course</th>
                <th className='border-2 px-2'>year</th>
                <th className='border-2 px-2'>Delete</th>


              </tr>

            </thead>

            <tbody>
              {mainList.map((item, index) => {
                return <tr key={index} className='text-xl'>
                  <td className='border-2 px-2 py-3'>{index + 1}</td>
                  <td className='border-2 px-2'>{item.name}</td>
                  <td className='border-2 px-2'>{item.age}</td>
                  <td className='border-2 px-2'>{item.course}</td>
                  <td className='border-2 px-2'>{item.year}</td>
                  <td onClick={() => handleClick(item._id)} className='border-2  px-2 '><img className='w-8 cursor-pointer' src={deleteImg} alt="delete" /></td>

                </tr>


              })}

            </tbody>

          </table>}
      </div>

    </>
  )
}

export default StudentList