import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookAIcon, UserIcon, PinIcon } from 'lucide-react'
import { valueProvider } from '../Context-Component/Provider'


const Lists = ({ item }) => {
    const { editName,setEditName,editAge,setEditAge,editCourse,setEditCourse,editYear,setEditYear,editId,setEditId } = useContext(valueProvider)
    const navigate = useNavigate()

    const handleEdit = () => {
        setEditName(item.name)
        setEditAge(item.age)
        setEditCourse(item.course)
        setEditYear(item.year)
        setEditId(item._id)
        navigate(`/edit/${item._id}`)
    }
    return (
        <>
            <div className=' w-[35%] mx-auto lg:mx-10 pb-4 '>
                <div className=' py-5 px-2 border-2 rounded '>
                    <p className='flex items-center gap-3 py-4  text-lg font-semibold'><span className='text-gray-400'><UserIcon /></span> {item.name} </p>
                    <p className='flex items-center gap-3 py-4  text-lg font-semibold'><span className='text-gray-400'><PinIcon /></span> {item.age} </p>
                    <p className='flex items-center gap-3 py-4  text-lg font-semibold'><span className='text-gray-400'><PinIcon /></span> {item.course} </p>
                    <p className='flex items-center gap-3 py-4  text-lg font-semibold'><span className='text-gray-400'><PinIcon /></span> {item.year} </p>

                    <div className='text-center pt-3'>
                        <button onClick={handleEdit} className='bg-sky-500 hover:bg-sky-600 w-[90%] text-white py-2 px-4 rounded'>Edit</button>
                    </div>

                </div>

            </div>


        </>
    )
}

export default Lists