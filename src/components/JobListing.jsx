import { useState } from 'react'
import React from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

const jobListing = ({ job }) => {
  const [show, setShow] = useState(false);

  const [showFullDescription, setshowFullDescription] = useState(true);

  let description = job.description;

  if(!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{job.type}</div>
                <h3 className="text-xxl font-bold">{job.title}</h3>
              </div>
  
              <div className="mb-5">
                {description}
              </div>
              <button onClick={ () => setshowFullDescription((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">{ showFullDescription ? 'Less' : 'More'}</button>
  
              <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
  
              <div className="border border-gray-100 mb-5"></div>
  
              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <FaMapMarker className='inline text-lg mb-1 mr-1'/>
                  {job.location}
                </div>
                <Button
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm" onClick={() => setShow(true)}
                >Read More</Button>
                <Modal show={show} 
                onHide={() => setShow(false)}
                size='xl'
                dialogClassName='modal-100w'
                aria-labelledby='example-custom-modal-styling-title'
                >
                <Modal.Header closeButton></Modal.Header>
    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-600 text-2xl mb-4">{job.type}</div>
              <h1 className="text-4xl font-bold mb-4">
                {job.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <FaMapMarker className='text-orange-700 mr-1' />
                <p className="text-orange-700">{job.location}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p className="mb-4">
               {job.description}
              </p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4">{job.salary}</p>
            </div>
          </main>

          {/* <!-- Sidebar --> */}
          <aside>
            {/* <!-- Company Info --> */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">{job.company?.name}</h2>

              <p className="my-2">
                {job.company?.description}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
                {job.company?.contactEmail}
              </p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company?.contactPhone}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
                to= {`/edit-job/${job.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</Link>
              <button onClick={ () => onDeleteClick(job.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
                </Modal>
              </div>
            </div>

    </div>
  )
}

export default jobListing
