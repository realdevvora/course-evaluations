import React from 'react'
import '../App.css'
import Navbar from './Navbar'

export default function CoursePage(props) {
    const {course} = props
    return (
        <div>
          <Navbar />
          <h3>{course.name}</h3>
        </div>
      )
}