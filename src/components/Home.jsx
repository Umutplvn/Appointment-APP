import React, { useState } from 'react'
import Doctors from './Doctors'
import {appointmentData} from '../helper/data'


const Home = () => {
  const[apps, setApps]=useState(appointmentData)

  console.log(appointmentData);
  return (
    <div>
        <Doctors apps={apps} setApps={setApps} />
    </div>
  )
}

export default Home