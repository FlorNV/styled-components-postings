import React from "react";
import Posting from "./Posting";
import { postings } from "../mockedPostings";

const Postings = () => {
  return (
    <>
      {postings.map((posting) => (
        <Posting key={posting.posting_id} posting={posting} />
      ))}
    </>
  );
};

export default Postings;
