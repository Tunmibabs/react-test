import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
        {/* <FaExclamationTriangle  className='text-yellow-400 text-6xl mb-4' /> */}
            <h1 className="text-6xl font-bold mb-4">OOPS! Something went wrong.</h1>
            <p className="text-xl mb-5">There was an issue processing this request. Please reload or go back to the Home Page.</p>
            <Link
                to="/"
                className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
                >Return to HomePage</Link>
    </section>
  )
}

export default ErrorPage
