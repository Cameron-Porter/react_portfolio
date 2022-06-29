import React from 'react'

function About() {
  return (
    <div className="about mx-3">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5 d-flex justify-content-center justify-content-lg-start my-5">
            <img className="img-fluid rounded-circle h-auto w-75" src="images/us.jpg" alt="" />
          </div>
          <div className="col-lg-5 p-lg-5">
            <h1 className="font-weight-light">About</h1>
            <p className="about-primary-p">
              Cameron is a Node.js Software Engineer on a Loyalty based team. He creates the backend
              logic for loyalty promotions in order to keep customers returning time and time again.
            </p>
          </div>
        </div>
        <div className="line my-5"></div>
        <div className="about-sec-2 mt-5">
          <h2>Digging Deeper</h2>
          <p>
            A thirst for wisdom is never quenched. Cameron has continued to invest in his
            professional development by taking part in #VetsWhoCode. This is a frontend bootcamp for
            veterans by veterans. Not only does he take part in the company's cohort, but also
            contributes to their main web application which is based on Next.js.
          </p>
          <p>
            When not programming you'll find Cameron spending time with family, at the gym, or
            cycling. Time with family is something you will never get back, so that is top priority.
            Staying fit and improving health also helps him to keep up with the kids and is a great
            stress relief.
          </p>
        </div>
        <div className="about-sec-3">
          <h3>Clients</h3>
          <p>He has had the pleasure of working with the following brands this past year:</p>
          <div className="clients">
            <img src="images/vwc.png" alt="#VetsWhoCode" />
            <img src="images/sony.png" alt="Sony" />
            <img src="images/valvoline.png" alt="Valvoline" />
            <img src="images/altria.png" alt="Altria Group" />
            <img src="images/carhartt.png" alt="Carhartt" />
            <img src="images/dunkin.png" alt="Dunkin Donuts" />
            <img src="images/cope.jpg" alt="Copenhagen" />
            <img src="images/marlboro.png" alt="Marlboro" />
            <img src="images/skoal.png" alt="Skoal" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
