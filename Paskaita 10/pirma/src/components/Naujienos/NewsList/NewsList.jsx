import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const HOST = "https://jsonplaceholder.typicode.com/posts";

    axios
      .get(HOST)
      .then(({ data }) => {
        setNews(data);
      })
      .catch((error) => {
        console.error("Klaida gaunant naujienas:", error);
      });
  }, []);

  return (
    <div>
      {news.slice(0, 2).map((item) => (
        <div key={item}>
          <h3>Id: {item.id}</h3>
          <p>Title: {item.title}</p>
          <p>Body: {item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
