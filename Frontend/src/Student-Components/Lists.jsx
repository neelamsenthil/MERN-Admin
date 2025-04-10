import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookAIcon, UserIcon, PinIcon } from 'lucide-react'
import { valueProvider } from '../Context-Component/Provider'


const Lists = ({ singleList }) => {
    const { editName, setEditName, editAge, setEditAge, editCourse, setEditCourse, editYear, setEditYear, editId, setEditId } = useContext(valueProvider)
    const navigate = useNavigate()
    // console.log(singleList);


    const handleEdit = () => {
        setEditName(singleList.name)
        setEditAge(singleList.age)
        setEditCourse(singleList.course)
        setEditYear(singleList.year)
        setEditId(singleList._id)
        navigate(`/edit/${singleList._id}`)
    }
    return (
        <>
            {singleList ? <div className=' w-[35%] mx-auto  pb-4 '>
                <div className=' py-5 px-2 border-2 rounded text-center '>
                    <p className='flex items-center gap-3 py-4  text-lg font-semibold'><span className='text-gray-400'><UserIcon /></span> {singleList.name} </p>
                    <p className='flex items-center gap-3 py-4  text-lg font-semibold'><span className='text-gray-400'><PinIcon /></span> {singleList.age} </p>
                    <p className='flex items-center gap-3 py-4  text-lg font-semibold'><span className='text-gray-400'><PinIcon /></span> {singleList.course} </p>
                    <p className='flex items-center gap-3 py-4  text-lg font-semibold'><span className='text-gray-400'><PinIcon /></span> {singleList.year} </p>

                    <div className='text-center pt-3'>
                        <button onClick={handleEdit} className='bg-sky-500 hover:bg-sky-600 w-[90%] text-white py-2 px-4 rounded'>Edit</button>
                    </div>

                </div>

            </div> : <></>}


        </>
    )
}

export default Lists