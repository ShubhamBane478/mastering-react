import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProjectDetail } from '../react-interview-questions/ProjectDetail.jsx'
import ReactInterView from '../react-interview-questions/reactInterviwe.jsx'
import NotFoundPage from './components/notFoundPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/react-interview-questions',
    element: <ReactInterView />,
  },{
    path: "*",
    element: <NotFoundPage/>
  },
  {
    path: "/react-interview-questions/:projectName",
    element: <ProjectDetail />,
  }
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
