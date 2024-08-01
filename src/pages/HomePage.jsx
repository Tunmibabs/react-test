import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs'
import jobListing from '../components/JobListing';
import AddJobPage from './AddJobPage';

const HomePage = () => {

  return (
    <div>
      <Hero />
      <HomeCards />
      <JobListings isHome = {true} />
      <ViewAllJobs />
    </div>
  )
}

export default HomePage;
