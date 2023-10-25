import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

export default function PicturesList() {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(({ data }) => setPictures(data))
      .catch((err) => console.log(err));
  }, []);

  const sortedPhotos = useMemo(
    () => pictures.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 10),
    [pictures]
  );
  return (
    <div>
      <button
        onClick={() => {
          setPictures((prev) => [
            ...prev,
            {
              albumId: 1,
              id: 1,
              title: "a aaaaaaaaaa aaaaaaaaaaaaaa",
              url: "https://via.placeholder.com/600/92c952",
              thumbnailUrl: "https://via.placeholder.com/150/92c952",
            },
          ]);
        }}
      >
        Add photo
      </button>
      {sortedPhotos.map((picture) => (
        <>
          <p>{picture.title}</p>
          <img
            key={picture.id}
            src={picture.thumbnailUrl}
            alt={picture.title}
          />
        </>
      ))}
    </div>
  );
}
