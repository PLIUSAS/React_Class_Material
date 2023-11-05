import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataFetcher1({ render }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return <div>{isLoading ? <h1>Loading...</h1> : render(data)}</div>;
}
