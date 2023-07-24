import React from 'react'
import { createBrowserRouter } from "react-router-dom";

import './App.css'
import Home from "./components/Home"
import NoPage from "./components/NoPage"
import CoursePage from './components/CoursePage';
import courses from './data/courses';
import Login from './components/navbarComponents/Login';
import Register from './components/navbarComponents/Register';

const courseRoutes = courses.map(course => ({path: `/${course.name}`, element: <CoursePage  course={course}/>, errorElement: <NoPage />}))


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
  {
    path: "/login",
    element: <Login />,
    errorElement: <NoPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NoPage />,
  },
  ...courseRoutes
])

export default app
