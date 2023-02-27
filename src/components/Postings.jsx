import React, { useContext, useEffect } from "react";
import Posting from "./Posting";
import { postings as postingsList } from "../mockedPostings";
import { PostingsContext } from "../contexts/PostingsContext";

const Postings = () => {
  const { postings, setPostings } = useContext(PostingsContext);

  useEffect(() => {
    setPostings(postingsList);
  }, []);

  return (
    <>
      {postings.map((posting) => (
        <Posting key={posting.posting_id} posting={posting} />
      ))}
    </>
  );
};

export default Postings;
