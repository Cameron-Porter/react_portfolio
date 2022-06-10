import React, { useEffect } from "react";
import { useParams } from "react-router";

function JuniorEngineer() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">Junior Engineering</h1>
        <h6 className="mb-5">Some Tips and Lessons Learned.</h6>
        <p className="mb-3">
          When you start as a junior engineer things can be pretty daunting.
          Whether you are learning a new language on the job or the code base is
          absolutely massive, one thing is for sure...you are never alone. You
          will always have a team that you can rely on in times of need. But
          don't use them as a crutch.
        </p>
        <p className="mb-3">
          Asking questions, knowing when to ask questions, and what questions to
          ask are all skills in and of themselves. When initially faced with a
          problem, a person would usually tinker to see what they could figure
          out. You look above and below the code and get the big picture of what
          is going on. Then if you still need help, use a search engine.
        </p>
        <p className="mb-3">
          Google Dorking is a fun term used for enhancing your search while
          using Google. By utilizing the dorking methods you can quickly cut out
          the unnecessary links that populate and see only things specifically
          related to your question. It is a great way to not only search for
          thing work related but also to expedite your personal searches as
          well.
        </p>
        <p className="mb-3">
          While searching you may find a link on StackOverflow, and I would
          highly suggest following that link. Many problems are not the first of
          their kind, what you need to accomplish very well may have been done
          by many before. As you patrol the StackOverflow posts, you can follow
          the chains to get a better understanding of how people approached
          similar issues. Sometimes it isn't a solution we need, rather a new
          perspective on the issue.
        </p>
        <p className="mb-3">
          Next, check your company's docs. Many think docs are overrated but
          they are there for a reason. That reason is to help you and others to
          work efficiently and to promote code reuse. This especially helps when
          using legacy code and the guidance you seek is exceptionally difficult
          to find.
        </p>
        <p className="mb-3">
          On that note, if you have done your part to research and investigate
          the issue but still have questions, just ask. Bring those questions to
          your team. The question may seem elementary, but by asking you are
          also allowing a teammate the opportunity to grow by explaining a
          solution or approach. Questions are always two sided, it is never only
          beneficial for just you when you ask, so keep that in mind.
        </p>
        <p className="mb-3">
          After completing your ticket, running tests can make for a fun game of
          word search when something fails. I would personally recommend reading
          through your console first. Small key words may pop out at you and
          could save you hours of debugging. This was the case for me yesterday.
          I initially thought I needed to implement a new method to handle part
          of a feature I was working on. After carefully reveiwing the log I
          noticed a one liner that smacked me in the face. I just needed to
          update a variable name and all worked as intended.
        </p>
        <p className="mb-3">
          Learning from others mistake is something we all need help with.
          Please learn from my mistake above, and then share your mistakes with
          others so they can learn too. The people around you are not your
          competition though it may feel like that at times. The people around
          you might or could be your future team. The time and effort you take
          to invest in them and their growth will only help you in the long run.
        </p>
        <p className="mb-3">
          Lastly, if you got the job, stop doubting yourself. Sure interviews
          suck, you get blasted with random questions that throw you off guard.
          You may have failed over and over again, but here you are living in
          the moment you have been striving for. You were chosen to be where you
          are, the people hiring you didn't make that decision lightly. You come
          as a total package that includes way more than your current skill set.
          Think about everything else you bring to the table as well as your
          ability to adapt and learn in the moment.
        </p>
        <p className="mb-3">
          As always there are some alibis that were not mentioned. If these
          tips/lessons aren't doing it for you, please feel free to connect with
          me and I'll be happy to share out some others!
        </p>
      </div>
    </div>
  );
}

export default JuniorEngineer;
