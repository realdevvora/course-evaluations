import React from 'react'
import '../App.css'
import ReviewForm from './algorithmComponents/ReviewForm'
import ReviewSection from './algorithmComponents/ReviewSection'

export default function CoursePage(props) {
    const {course} = props
    return (
      <>
        <div className="course-details">
          <div className="details">
            <h1>{course.title}</h1>
            <p>Distribution: {course.distribution}</p>
            <p>Difficulty: {course.difficulty}</p>
          </div>
          <ReviewForm course={course}/>
          <br />
          <ReviewSection course={course}/>
        </div>
      </>
        
      )
}