import React, { useEffect } from 'react'
import { useParams } from 'react-router'

function FirstProject() {
  let { postSlug } = useParams()

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug])

  return (
    <div className="home links">
      <div className="container">
        <h1 className="mt-5">First Project</h1>
        <h6 className="mb-5">Where learning and hobbies collide for the sake of progress.</h6>
        <p className="mb-3">
          For as long as I can remember, I have loved role playing games. The sense of adventure,
          the wild quests, cool magic, and the ability to grow your character as you see fit, what's
          not to love! It is a kin to a combination of every great game type wrapped into one.
        </p>
        <p className="mb-3">
          So when it came to making my first project I knew I needed to make it fun. If it wasn't
          going to be enjoyable, then I would quickly lose interest and stop dedicating time to it.
          This is when I decided I would make a console based game.
        </p>
        <p className="mb-3">
          For those who may not know, the console is your command line. Some know it as Terminal,
          CMD, or Console depending how you are accessing the tool and from where. It is the
          ultimate powerhouse of using your computer without a graphical user interface.
        </p>
        <p className="mb-3">
          Back to the project... at the time I was using Python and wanted to learn more about data
          structures and algorithms. So I broke out the ole pen and paper to scratch down a quick
          idea.
        </p>
        <p className="mb-3">
          Was nothing fancy, but it was a short story set in 4 different rooms each with their own
          fantasy theme. Depending the order in which you visited the rooms and the choices you made
          in each would seal your fate.
        </p>
        <p className="mb-3">
          To do this as my first project, I keyed in on a few things to grow my competence in. The
          game as a whole only had 5 functions, 3 global variables, and a simple choice with input
          for each room. But even with that simplicity it was a great confidence boost in the end.
        </p>
        <p className="mb-3">
          With that boost I ended up making 2 other renditions of that project. Each different from
          the last and expounding upon what I had learned previously. Feel free to take a look at
          them all <a href="https://github.com/Cameron-Porter/Text-based">in my Github </a>
          if you are interested.
        </p>
        <p className="mb-3">
          The last one, Labyrinth, was one I truly enjoyed making. I implemented classes, stats,
          chance during fights, etc. Felt like I had finally made a low key RPG. Nothing fancy, but
          it was mine.These projects would never be sold to the public, would never see them in a
          mobile app store, but they helped me to gain the confidence and understanding needed to
          dive further into programming.
        </p>
      </div>
    </div>
  )
}

export default FirstProject
