import React, { createContext, useState } from 'react'
export const valueProvider = createContext()




const Provider = (props) => {
    const [mainList, setMainList] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [course, setCourse] = useState('')
    const [year, setYear] = useState('')

    const [editName, setEditName] = useState('')
    const [editAge, setEditAge] = useState('')
    const [editCourse, setEditCourse] = useState('')
    const [editYear, setEditYear] = useState('')
    const [editId, setEditId] = useState('')

    const [deleteId, setDeleteId] = useState('')


    const obj = {
        mainList,
        setMainList,
        name,
        setName,
        age,
        setAge,
        course,
        setCourse,
        year,
        setYear,
        editName,
        setEditName,
        editAge,
        setEditAge,
        editCourse,
        setEditCourse,
        editYear,
        setEditYear,
        editId,
        setEditId,
        deleteId,
        setDeleteId

    }
    return (
        <div>
            <valueProvider.Provider value={obj}>
                {props.children}

            </valueProvider.Provider>
        </div>
    )
}

export default Provider