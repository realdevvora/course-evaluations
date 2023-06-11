import React from 'react'
import { createBrowserRouter } from "react-router-dom";

import './App.css'
import Home from "./components/Home"
import NoPage from "./components/NoPage"
import Evaluation from './components/Evaluation';
import courses from './data/courses';

const courseRoutes = courses.map(course => ({path: `/${course.name}`, element: <Evaluation />, errorElement: <NoPage />}))


const app = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NoPage />,
  },
  {
    path: "/evaluation",
    element: <Home />,
    errorElement: <NoPage />,
  },
  ...courseRoutes
])

export default app
