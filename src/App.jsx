import React from 'react'
import { createBrowserRouter } from "react-router-dom";

import './App.css'
import Home from "./components/Home"
import NoPage from "./components/NoPage"
import Evaluation from './components/Evaluation';

const app = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NoPage />,
  },
  {
    path: "/evaluation",
    element: <Evaluation />,
    errorElement: <NoPage />,
  }
])

export default app
