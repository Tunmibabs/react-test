import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import JobsListings from '../components/JobListings'

const ViewAllJobs = () => {
    const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center">
      <Button className="flex justify-center items-center bg-black text-white text-center py-3 px-9 rounded-xl hover:bg-gray-700" onClick={() => setShow(true)}>
          View All Jobs
        </Button>

      <Modal 
      show={show} 
      onHide={() => setShow(false)}
      size='xl'
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton></Modal.Header>
        <JobsListings/>
      </Modal>
    </div>
  );
}

export default ViewAllJobs;
