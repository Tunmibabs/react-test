import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import JobsListings from '../components/JobListings'

const ViewAllJobs = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }

  return (
    <div className="flex justify-center">
      <Button className="flex justify-center items-center bg-black text-white text-center py-3 px-9 rounded-xl hover:bg-gray-700" onClick={() => handleShow(true)}>
          View All Jobs
        </Button>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <JobsListings/>
      </Modal>
    </div>
  );
}

export default ViewAllJobs;
