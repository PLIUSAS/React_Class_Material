import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
      setPosts(data);
    }, []);
  });

  return (
    <div>
      {posts.map((post) => (
        <h4 key={post.id}>
          ID: {post.id} Title: <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h4>
      ))}
    </div>
  );
}
