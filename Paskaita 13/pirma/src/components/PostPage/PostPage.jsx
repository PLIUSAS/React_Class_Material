import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : post ? (
        <div key={post.id}>
          <h4>Post ID: {post.id}</h4>
          <h4>Post Title: {post.title}</h4>
          <Link to="/postList">Grįžti į sąrašą</Link>
        </div>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
}
