import React from 'react'

const Modal = () => {
  return (
    <>
    <div className='flex fixed justify-center items-center left-0 w-full bg-[#f5f1f1] inset-0 z-50 '>
        <div className="inline relative bg-neutral-50 rounded-lg shadow-lg border-2 border-[#363636]">
            <h1>Are Your Sure? </h1>
            <div className="flex m-5 gap-5">
            <button className='w-full text-indigo-700 border border-indigo-600 py-4 px-6 rounded inline-flex items-center' >Yes</button>
            <button className='w-full text-indigo-700 border border-indigo-600 py-4 px-6 rounded inline-flex items-center'>No</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modal