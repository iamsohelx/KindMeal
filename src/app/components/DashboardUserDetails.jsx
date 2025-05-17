'use client'
import React, { useEffect, useState } from 'react'
import { NavUser } from './NavUser'
import { GetUserDetails } from '@/Actions/GetUserDetails'

const DashboardUserDetails = () => {


  const [UserData, setUserData] = useState(null);

  useEffect(()=>{
     toLoadFunc();
  },[])

  const toLoadFunc = async ()=> {
     const res = await GetUserDetails();

     if(res?.success){
         setUserData(res?.data);
     }
  }


  return (
    
    <div className='mt-3'>
      {UserData && <div>
       <h1 className='font-bold mb-[-2px]'>{UserData.name}</h1>
       <p className='text-gray-600'>{UserData.email}</p>
       </div>
      }
    </div>
      
  )
}

export default DashboardUserDetails
