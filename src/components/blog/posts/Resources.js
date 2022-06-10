import React, { useEffect } from "react";
import { useParams } from "react-router";

function Resources() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home links">
      <div class="container">
        <h1 className="mt-5">Resources</h1>
        <h6 className="mb-5">
          The Who, What, Where of resources that helped me achieve my goal.
        </h6>
        <p className="mb-3">
          First and foremost, have to give thanks to Christ and my wife for the
          constant support throughout this process. Certainly wouldn't have been
          able to get where we are today without them. They took care of
          everything behind the scenes while I was moving full speed ahead.
        </p>
        <p className="mb-3">
          So resources... I believe the first resource that helped me was my
          schooling. I attended American Military University full time during
          nights and gained a decent foundation through their program. I chose
          the Programming specific path which focused on JAVA and Python. This
          introduced me to the world of Object Oriented Programming (OOP), and
          all that is possible through this approach.
        </p>
        <p className="mb-3">
          Though college certainly isn't for everyone, it was the best option
          for me at the time. I would also recommend a bootcamp as we will touch
          on later, veterans can apply for the VetTec program and attend most
          for little to no cost. This VA program affords you all the benefits of
          the GI Bill, yet doesn't actually use your GI Bill. I'd highly
          recommend applying for it even if you don't end up using it.
        </p>
        <p className="mb-3">
          While in school I started to use FreeCodeCamp.org. This was an
          invaluable resource that boosted my confidence early on. They have a
          fun approach to programming which gradually builds upon itself. You
          get to see examples, walk throughs, and work with a live server while
          going through the modules. Some modules are grouped into
          'certifications' which you can complete projects for and gain a
          certification to share on your social profiles. I completed the
          Responsive Web Design certification, which was a great introduction to
          HTML, CSS, JS, accessibility, responsiveness, and design. It also
          helped me to see another path in the SWE world.
        </p>
        <p className="mb-3">
          Speaking of paths, edX was another great resource that deep dived into
          various topics. If you don't know, edX is or was a site you could
          audit university courses for free. Gaining the knowledge of the course
          just not the credits. Or you could pay and get a certificate of
          completion if you are into that sort of thing. I went through a few
          courses here, but most noteably was the Machine Learning with Python
          course. Learned and implemented various patterns such as Breadth First
          Search (BFS), Depth First Search (DFS), Greedy Best First Search, etc.
        </p>
        <p className="mb-3">
          Skipping forward, I started watching a lot of YouTube videos on
          programming. If you take nothing else away from this post, just know
          the day in the life videos are complete trash. Most show you a
          fabricated day of garbage. None the less, I did find some gems. One of
          which was The Clever Programmer. The tutorial videos on a Netflix and
          WhatsApp clone were my favorites. They exposed me to React.js and I
          was able to take what I learned to make some clones of my own.
        </p>
        <p className="mb-3">
          Last but certainly not least, bootcamps. I'm currently in the tail end
          of the #VetsWhoCode Romeo-Golf cohort. It has been an amazing
          experience, 10/10 recommend. To apply you have to visit their site and
          submit a project. You get some feedback and implement changes, have an
          interview or two, then hear if you made it. We started with Git and
          went into version control, then reviewed HTML and CSS. Spent some time
          with Javascript going over higher order functions, fetching APIs, and
          DS&As. We are now transitioning into the React.js and Next.js portion
          of the cohort. With AWS and interview prep rounding out the bootcamp.
        </p>
        <p className="mb-3">
          The bonus of this particular bootcamp is that it is project based and
          is made up of a familiar community. As mentioned, it is for vertans by
          veterans and caters to the terminology we all have grown accustom to.
          This helps to quickly get you acclimated to the tech terms and
          understand the why behind certain things. The projects are two fold,
          maintenance and improvement. At first you browse the issues listed on
          Github for their website and help to solve them. This aids in learning
          about the real world application of what you learn, as well as
          experiencing code reviews and the like. Then your cohort as a team
          will build out a new feature to continue to help future veterans
          transition into tech.
        </p>
        <p className="mb-3">
          This is my favorite resource by far if you couldn't tell. Contributing
          to an open source project, creating something to help future veterans
          have a successful transition into the tech space, and being able to
          give back and keep pouring into the community, there just isn't
          something like it. The 1:1 mentorship is also invaluable as well as
          the monthly 'drills' where you get to listen to talks from current
          leaders in a specialty. The network and friends gained through the
          program are ones you will keep with you throughout your career.
        </p>
        <p className="mb-3">
          As always there are some alibis that were not mentioned. If these
          resources aren't doing it for you, please feel free to connect with me
          and I'll be happy to share out some others!
        </p>
      </div>
    </div>
  );
}

export default Resources;
