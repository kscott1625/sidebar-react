import React from 'react'
import oops from "../assets/oops.png"
import Button from './Button'

export const NoProjectSelected = (onStartAddProject) => {
  return (
    <div className='mt-24 text-center w-2/3'>
    <img src={oops} alt="oops emoji" className='w-16 h-16 object-contain mx-auto'></img>
    <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
    <p className='text-stone-400 mb-4'>Select project or start a new one</p>
    <p className='mt-8'>
        <Button onClick={onStartAddProject}>Create new project</Button>
    </p>
    </div>
  )
}
