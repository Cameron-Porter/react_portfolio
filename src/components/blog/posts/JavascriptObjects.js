import React, { useEffect } from 'react'
import { useParams } from 'react-router'

function JavascriptObjects() {
  let { postSlug } = useParams()

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug])

  return (
    <div className="home links">
      <div className="container">
        <h1 className="mt-5">Javascript Objects</h1>
        <h6 className="mb-5">What are they and how to use'em...</h6>
        <p className="mb-3">
          I know you are excited to take a look at JS objects, this post is currently underway.
          <br />
          <br />
          Please come back soon to see the full write up.
          <br />
          <br />
          I will be using the standard sumTwo problem to showcase an effective way to use JS objects
          in algorithms.
          <br />
          <br />
          Hope you like it, and take care till then!
        </p>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
      </div>
    </div>
  )
}

export default JavascriptObjects
