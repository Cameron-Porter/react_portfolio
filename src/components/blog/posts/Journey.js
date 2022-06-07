import React, { useEffect } from "react";
import { useParams } from "react-router";

function Journey() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">My Journey</h1>
        <h6 className="mb-5">A look inside the how and why of this blog.</h6>
        <p className="mb-3">
          A few years ago, my family decided we would leave the military life
          and settle down near extended family. This brought up many challenges
          that needed to be overcome if we wanted to have a successful
          transition. Thus the catalyst of our new life was born.
        </p>
        <p className="mb-3">
          I reached out to a few people I knew who worked remotely and asked
          about what they did. That ultimately lead me to Software Engineering.
          I quickly got enrolled into an online BS program and started going to
          school full time at night.
        </p>
        <p className="mb-3">
          The program was geared toward programming with JAVA and Python. It was
          a great introduction to the world of coding, and I was honestly just
          glad to finally have a degree under my belt. I completed that degree
          in 2020 just before getting out of the military. I then searched high
          and low for every possible resource I could find to help level up my
          new skills.
        </p>
        <p className="mb-3">
          Freecodecamp, edX, YouTube, LinkedIn Learning, etc were all extremely
          helpful in the beginning stages of my growth. Come AUG 2021 I had gone
          through multiple interviews, made it to many last rounds, and yet
          still came up short. I eventually looked at related positions and got
          a job as a Software Support Specialist for a local company.
        </p>
        <p className="mb-3">
          This position was fantastic because it allowed me the opportunity to
          still code throughout the day when I had down time and it was remote.
          Couldn't pass that up! After six months in support, I finally landed
          my first Software Engineering role as a backend engineer. To say I was
          elated is an understatement.
        </p>
        <p className="mb-3">
          Coincidently, I also started at a nightly frontend bootcamp with
          #VetsWhoCode the same day I started my new role as a SWE. This
          bootcamp is run by veterans for veterans. It has allowed me to grow
          exponentially through our project based learning and 1:1 mentorship
          with senior developers.
        </p>
        <p className="mb-3">
          Which leads us to here and now. This blog is meant for me to document
          and share things I learn on my journey. It is a brain dump of things I
          can reference down the road to help solve future questions and make
          room to learn more things. Most importantly though, this is also
          intended to be a resource for others to reference in times of need and
          growth.
        </p>
        <p className="mb-3">
          Thanks for taking the time to join my quick chat. Hope you find the
          future posts to be both helpful and informative.
        </p>
      </div>
    </div>
  );
}

export default Journey;
