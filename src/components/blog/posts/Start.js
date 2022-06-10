import React, { useEffect } from "react";
import { useParams } from "react-router";

function Start() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home links">
      <div class="container">
        <h1 className="mt-5">Where Do I Start</h1>
        <h6 className="mb-5">So many options, where do I start to learn?</h6>
        <p className="mb-3">
          With a short search online you will find hundreds if not thousands of
          results on programming. Learn X programming language here, or make X
          with this tech stack, you get the idea. The information is
          overwhelming and honestly people don't usually do well with too many
          choices.
        </p>
        <p className="mb-3">
          With that said, let me help guide you in a decent direction. As
          mentioned in my <a href="./Resources.js">Resources post</a>,
          FreeCodeCamp.org is a great site to get started with. It is a non
          profit organization whose sole purpose is to train and develop new
          devs.
        </p>
        <p className="mb-3">
          As you begin to research programming you will see there are a ton of
          sub specialties you can get into. FreeCodeCamp offers about 10
          different free certifications and each is in a different sub
          specialty. So you can have a taste of what each one is like before you
          choose to deep dive into the one of your liking.
        </p>
        <p className="mb-3">
          The way their modules are setup is quite nice for a new developer.
          They have a tri-pane view: examples and directions on the left,
          editable file in the center, and the rendered code on the right. This
          allows you to instantly see what the fruits of your labor are before
          you submit your assignment for the module.
        </p>
        <p className="mb-3">
          The other nice thing about this setup is that you don't immediately
          need to worry about downloading a specific code editor. Atom, Sublime,
          VS Code, whatever, it can wait since you code directly in the browser
          window. But feel free to get one for some personal projects, I have
          used each of those mentioned and am currently using VS Code. They each
          have nice features, just have to see what works for you.
        </p>
        <p className="mb-3">
          On top of the modules and the free certifications, FreeCodeCamp has a
          wealth of videos and lessons to continue your learning journey well
          after completing the initial training. It doesn't matter if you are 1
          month into programming or 10 years in, there will always be more to
          learn and FCC is constantly updating their content.
        </p>
        <p className="mb-3">
          Give this site a shot. It is free, it's a non profit, you can earn
          free certifications, and there is fresh content being added daily. If
          nothing else, it will expose you to some different sub specialties
          within the programming field and help you to narrow your end goal.
          Honestly, what is the worst that can happen? Gain a little knowledge
          and then decide to move on.
        </p>
        <p className="mb-3">
          If you don't like it, just blame me. I'll take the blame. But then let
          me know what you chose to go with instead and why. Would love to learn
          of more resources and help others find them too!
        </p>
      </div>
    </div>
  );
}

export default Start;
