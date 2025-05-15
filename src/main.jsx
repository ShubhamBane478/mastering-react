import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './components/notFoundPage.jsx'
import { ProjectCard } from './components/ProjectCard.jsx'
import miniProjectData from './mini_projects/miniProjectData.js'
import ecosystemData from './react-ecosystem/ecosystemData.js'
import ivQuestionData from './react-interview-questions/interviewProject.js'
import { ProjectDetail } from './react-interview-questions/ProjectDetail.jsx'
// import { MinProjectDetail } from './mini_projects/MinProjectDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/react-interview-questions',
    element:  <ProjectCard projectData = {ivQuestionData}/>,
  },{
    path: "*",
    element: <NotFoundPage/>
  },
  {
    path: "/react-interview-questions/:projectName",
    element: <ProjectDetail  projectData={ivQuestionData}/>,
  },
  {
    path: "/mini-project/",
    element: <ProjectCard projectData = {miniProjectData}/>
  },
  {
    path: "/mini-project/:projectName",
    element: <ProjectDetail projectData={miniProjectData}/>,
  },
  //React Ecosystem
  {
    path: "/react-ecosystem/",
    element: <ProjectCard projectData={ecosystemData}/>,
  },
  {
    path: "/react-ecosystem/:projectName",
    element: <ProjectDetail projectData={ecosystemData}/>,
  }
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
