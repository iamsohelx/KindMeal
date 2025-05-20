import React from 'react'
import { Suspense } from 'react'
import { FoodPass } from '../components/FoodPass'

const Page = () => {
  return (
    
      <Suspense>
        <FoodPass/>
      </Suspense>
  )
}

export default Page
