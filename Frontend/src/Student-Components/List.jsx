import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Lists from './Lists'
import { valueProvider } from '../Context-Component/Provider'
import icon from '../assets/back-icon.png'
import {StepBack} from 'lucide-react'
import axios from 'axios'


const List = () => {
  const navigate = useNavigate()
  const { mainList, setMainList } = useContext(valueProvider)


  useEffect(()=>{
    getList()
    // console.log(mainList);
    

  },[])


  const getList = async () => {
    try {
    await  axios.get("http://localhost:4000/api")
    .then((res)=>setMainList(res.data))
    } catch (error) {
      console.log(error);
      
      
    }
  }
  return (
    <>
      <div className='  '>
        <div className=' flex justify-between items-center mx-10 py-4 '>
          <p onClick={()=>navigate('/')} className='cursor-pointer'><StepBack /></p>
          <h1 className=' text-3xl lg:text-4xl text-sky-600  '>List</h1>
        </div>

        {mainList == '' ? <div className='mx-10 lg:mx-20 pt-10 lg:pt-20'><p className='text-xl text-center lg:text-2xl '>Empty List :(</p></div> : <></>}


        <div className=' pt-5  lg:flex items-center flex-wrap gap-5  '>
          {mainList.map((item, index) => {
            return <Lists key={index} item={item} />
          })}


        </div>


      </div>

    </>
  )
}

export default List