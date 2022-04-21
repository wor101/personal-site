import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProjectsList from '../components/ProjectsList'

const Projects = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProjectsList />} />
      </Routes>
    </>
  )
}

export default Projects
