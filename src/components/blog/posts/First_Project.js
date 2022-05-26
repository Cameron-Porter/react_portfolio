import React, { useEffect } from "react";
import { useParams } from "react-router";

function FirstProject() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">First Project</h1>
        <h6 className="mb-5">
          Where learning and hobbies collide for the sake of progress.
        </h6>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
        <p className="mb-3"></p>
      </div>
    </div>
  );
}

export default FirstProject;
