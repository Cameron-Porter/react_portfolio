import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home row">
      <div class="container col-md-4">
        <Link to="/blog/original">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="images/face.jpg"
            alt=""
          />
          <h1 class="font-weight-light">Intro to my Blog</h1>
          <p>
            Take a dive into the reason behind this blog. What was the catylist
            behind its conception, the purpose, and future of this creation.
          </p>
        </Link>
      </div>
      <div class="container col-md-4">
        <Link to="/blog/cycling">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="images/face.jpg"
            alt=""
          />
          <h1 class="font-weight-light">Glassmorphism</h1>
          <p>
            The hot topic of glassmorphism. Making a component look like it is
            glass with all the related bells and wistles.
          </p>
        </Link>
      </div>
      <div class="container col-md-4">
        <Link to="/blog/buttons">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="images/face.jpg"
            alt=""
          />
          <h1 class="font-weight-light">Push Your Buttons?</h1>
          <p>
            Buttons are the liveblood of any good action. Here are some neat
            effects you can use on your next project.
          </p>
        </Link>
      </div>
      <div class="container col-md-4">
        <Link to="/blog/original">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="images/face.jpg"
            alt=""
          />
          <h1 class="font-weight-light">Intro to my Blog</h1>
          <p>
            Take a dive into the reason behind this blog. What was the catylist
            behind its conception, the purpose, and future of this creation.
          </p>
        </Link>
      </div>
      <div class="container col-md-4">
        <Link to="/blog/cycling">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="images/face.jpg"
            alt=""
          />
          <h1 class="font-weight-light">Glassmorphism</h1>
          <p>
            The hot topic of glassmorphism. Making a component look like it is
            glass with all the related bells and wistles.
          </p>
        </Link>
      </div>
      <div class="container col-md-4">
        <Link to="/blog/buttons">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="images/face.jpg"
            alt=""
          />
          <h1 class="font-weight-light">Push Your Buttons?</h1>
          <p>
            Buttons are the liveblood of any good action. Here are some neat
            effects you can use on your next project.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Posts;
