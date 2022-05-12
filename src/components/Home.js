import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="images/face.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">
              Software Engineer | Forever Learner
            </h1>
            <p>Ready to take your project through it's next plateu.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
