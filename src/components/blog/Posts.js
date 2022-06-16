import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div class="home row justify-content-center">
      <Link
        to="/blog/JuniorEngineer"
        class="col-12 col-md-5 col-xl-3 m-3 mylink"
      >
        <div class="card">
          <img
            class="card-img-top"
            src="images/juniordev.png"
            alt="Card  cap"
          />
          <div class="card-body">
            <h5 class="card-title">Junior Engineering</h5>
            <p class="card-text">Some Tips and Lessons Learned...</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 6-10-2022</small>
          </div>
        </div>
      </Link>
      <Link to="/blog/Start" class="col-12 col-md-5 col-xl-3 m-3 mylink">
        <div class="card">
          <img class="card-img-top" src="images/swe.png" alt="Card  cap" />
          <div class="card-body">
            <h5 class="card-title">Where Do I Start?</h5>
            <p class="card-text">So many options, where do I start...</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 6-8-2022</small>
          </div>
        </div>
      </Link>
      <Link to="/blog/FirstProject" class="col-12 col-md-5 col-xl-3 m-3">
        <div class="card">
          <p class="rpg card-image-top">RPG</p>
          <div class="card-body">
            <h5 class="card-title">First Project</h5>
            <p class="card-text">Where learning and hobbies collide...</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 6-6-2022</small>
          </div>
        </div>
      </Link>
      <Link to="/blog/resources" class="col-12 col-md-5 col-xl-3 m-3">
        <div class="card">
          <img
            class="card-img-top"
            src="images/resources.jpg"
            alt="Card  cap"
          />
          <div class="card-body">
            <h5 class="card-title">Resources</h5>
            <p class="card-text">Who, What, Where of Resources...</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 6-5-2022</small>
          </div>
        </div>
      </Link>
      <Link to="/blog/journey" class="col-12 col-md-5 col-xl-3 m-3">
        <div class="card">
          <img class="card-img-top" src="images/face.jpg" alt="Card  cap" />
          <div class="card-body">
            <h5 class="card-title">My Journey</h5>
            <p class="card-text">Veteran to Software Engineer...</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 6-4-2022</small>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Posts;
