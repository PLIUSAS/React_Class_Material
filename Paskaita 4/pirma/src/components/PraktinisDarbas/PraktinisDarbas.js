import React, { useState } from "react";
import axios from "axios";
import Posts from "../Posts/Posts";
import Comments from "../Comments/Comments";

export default function PraktinisDarbas() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getPosts() {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
      setIsLoading(false);
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  }
  async function getComments() {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments/"
      );
      console.log(data);
      setComments(data);
      setIsLoading(false);
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  }
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <button onClick={getPosts}>Get Posts</button>
      )}
      {posts.length > 0 ? (
        posts.map((posts) => {
          return <Posts title={posts.title} body={posts.body} />;
        })
      ) : (
        <h1>No posts</h1>
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <button onClick={getComments}>Get Comments</button>
      )}
      {comments.length > 0 ? (
        comments.map((comments) => {
          return <Comments name={comments.name} body={comments.body} />;
        })
      ) : (
        <h1>No Comments</h1>
      )}
    </div>
  );
}
