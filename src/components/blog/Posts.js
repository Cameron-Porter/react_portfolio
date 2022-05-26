import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home row">
      <div class="container col-md-5 col-xl-4">
        <Link to="/blog/journey">
          <div class="image">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="images/face.jpg"
              alt=""
            />
          </div>

          <h3 class="font-weight-light">My Journey</h3>
          <p>
            From Yeoman to Software Engineer, and how I got here. A general
            overview.
          </p>
        </Link>
      </div>
      <div class="container col-md-5 col-xl-4">
        <Link to="/blog/resources">
          <div class="image">
            <div class="card">
              <div class="ball"></div>
              <div class="ball"></div>
              <div class="card-inner back"></div>
              <div class="card-inner"></div>
              <div class="card-inner front">
                <p class="r-text">So Many Options!</p>
                <ul class="r-list">
                  <li>School</li>
                  <li>FreeCodeCamp</li>
                  <li>YouTube</li>
                  <li>Bootcamp</li>
                  <li>etc</li>
                </ul>
              </div>
            </div>
          </div>
          <h3 class="font-weight-light">Resources</h3>
          <p>
            The Who, What, Where of resources that helped me achieve my goal.
          </p>
        </Link>
      </div>
      <div class="container col-md-5 col-xl-4">
        <Link to="/blog/FirstProject">
          <div class="image">
            <p class="rpg">RPG</p>
          </div>
          <h3 class="font-weight-light">First Project</h3>
          <p>Where learning and hobbies collide for the sake of progress.</p>
        </Link>
      </div>
    </div>
  );
}

export default Posts;
