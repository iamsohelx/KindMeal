import React from 'react'
import { Suspense } from 'react'
import { FoodDetailComp } from '../components/FoodDetailComp'

const Page = () => {
  return (
    <Suspense>
       <FoodDetailComp/>
    </Suspense>
  )
}

export default Page
