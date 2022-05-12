/* eslint-disable default-case */
import React, { useEffect } from "react";
import { useParams } from "react-router";
import Cycling from "./Cycling";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  switch (postSlug) {
    case "original":
      return (
        <div className="home">
          <div class="container">
            <h1 className="mt-5">This is Post Title 1</h1>
            <h6 className="mb-5">The post slug is, {postSlug}</h6>
            <p>Org.</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      );
    case "cycling":
      return <Cycling />;
  }
}
export default Post;
