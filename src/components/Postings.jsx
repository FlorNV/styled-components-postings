import React, { useContext, useEffect } from "react";
import Posting from "./Posting";
import { postings as postingsList } from "../mockedPostings";
import { PostingsContext } from "../contexts/PostingsContext";
import NotFound from "./NotFound";
import { FavoritesContext } from "../contexts/FavoritesContext";

const Postings = () => {
  const { postings, setPostings } = useContext(PostingsContext);
  const { setFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    setPostings(postingsList);
    const list = JSON.parse(localStorage.getItem("favorites"));
    if (list) {
      setFavorites(list);
    }
  }, []);

  return (
    <>
      {!postings.length ? (
        <NotFound />
      ) : (
        postings.map((posting) => (
          <Posting key={posting.posting_id} posting={posting} />
        ))
      )}
    </>
  );
};

export default Postings;
