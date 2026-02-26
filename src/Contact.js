import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold m-4'>Contact us page</h1>
      <form action="">
        <input className='border-2 border-gray-300 p-2 rounded-md' type="text" placeholder='name' /> 
        <input className='border-2 border-gray-300 p-2 m-4 rounded-md' type="text" placeholder='message' /> 
        <button className='bg-blue-500 text-white p-2 rounded-md' type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact
