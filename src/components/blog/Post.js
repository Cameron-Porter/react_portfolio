/* eslint-disable default-case */
import React, { useEffect } from "react";
import { useParams } from "react-router";
import Journey from "./posts/Journey";
import Resources from "./posts/Resources";
import FirstProject from "./posts/First_Project";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  switch (postSlug) {
    case "journey":
      return <Journey />;
    case "resources":
      return <Resources />;
    case "FirstProject":
      return <FirstProject />;
  }
}
export default Post;
