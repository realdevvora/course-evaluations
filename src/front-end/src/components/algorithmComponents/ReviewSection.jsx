import { useEffect, useState } from "react"
import { useReviewContext } from "../../hooks/useReviewContext"

const ReviewSection = (props) => {
    const {course} = props
    const {reviews, dispatch} = useReviewContext()

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch("/api/reviews")
            const json = await response.json()
            
            const listReviews = []
            if (response.ok) {
                for (const key in json) {
                    if (json[key].courseTitle === course.title) {
                        listReviews.push(json[key])
                    }
                    
                }
                dispatch({type: "SET_REVIEWS", payload: listReviews})
            }
        }

        fetchReviews()
    }, [course])



    return (
        <div className="review--block">
        {reviews ? (
            reviews.map(review => (
                <div className="search--box--review" key={review._id} onClick={() => {}}>
                    <div className="review--block--header">
                        <h3>{review.title}</h3>
                        <p>by: <strong>{review.author}</strong> in {review.program}</p>
                    </div>
                    <p>{review.message}</p>
                    <div className="review--block--ratings">
                        <h4>Rating: {review.rating}/10</h4>
                        <h4>Difficulty: {review.difficulty}/10</h4>
                    </div>
                    <span onClick={async () => {
                        const response = await fetch("/api/reviews/" + review._id, {
                            method: "DELETE"
                        })
                        const json = await response.json()

                        if (response.ok) {
                            console.log("review deleted")
                        }
                    }}><strong>Delete</strong></span>
                </div>
            ))
        ) : (
            <p>Loading reviews...</p>
        )}
    </div>
    )

}

export default ReviewSection