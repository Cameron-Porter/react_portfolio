import React from 'react'
import { Link } from 'react-router-dom'

function Posts() {
  return (
    <div className="home row justify-content-center">
      <Link to="/blog/JuniorEngineer" className="col-12 col-md-5 col-xl-3 m-3 mylink">
        <div className="card">
          <img className="card-img-top" src="images/juniordev.png" alt="Card  cap" />
          <div className="card-body">
            <h5 className="card-title">Junior Engineering</h5>
            <p className="card-text">Some Tips and Lessons Learned...</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 6-10-2022</small>
          </div>
        </div>
      </Link>
      <Link to="/blog/Start" className="col-12 col-md-5 col-xl-3 m-3 mylink">
        <div className="card">
          <img className="card-img-top" src="images/swe.png" alt="Card  cap" />
          <div className="card-body">
            <h5 className="card-title">Where Do I Start?</h5>
            <p className="card-text">So many options, where do I start...</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 6-8-2022</small>
          </div>
        </div>
      </Link>
      <Link to="/blog/FirstProject" className="col-12 col-md-5 col-xl-3 m-3">
        <div className="card">
          <p className="rpg card-image-top">RPG</p>
          <div className="card-body">
            <h5 className="card-title">First Project</h5>
            <p className="card-text">Where learning and hobbies collide...</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 6-6-2022</small>
          </div>
        </div>
      </Link>
      <Link to="/blog/resources" className="col-12 col-md-5 col-xl-3 m-3">
        <div className="card">
          <img className="card-img-top" src="images/resources.jpg" alt="Card  cap" />
          <div className="card-body">
            <h5 className="card-title">Resources</h5>
            <p className="card-text">Who, What, Where of Resources...</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 6-5-2022</small>
          </div>
        </div>
      </Link>
      <Link to="/blog/journey" className="col-12 col-md-5 col-xl-3 m-3">
        <div className="card">
          <img className="card-img-top" src="images/face.jpg" alt="Card  cap" />
          <div className="card-body">
            <h5 className="card-title">My Journey</h5>
            <p className="card-text">Veteran to Software Engineer...</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 6-4-2022</small>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Posts
