import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post/Post";

const ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);

  const [bodyInput, setBodyInput] = useState("");
  const [isBodyValid, setIsBodyValid] = useState(true);

  useEffect(() => {
    axios
      .get(ENDPOINT)
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if (titleInput.length === 0 || titleInput.length > 15) {
      setIsTitleValid(false);
    } else {
      setIsTitleValid(true);
    }
  }, [titleInput]);
  useEffect(() => {
    if (bodyInput.length === 0 || bodyInput.length > 30) {
      setIsBodyValid(false);
    } else {
      setIsBodyValid(true);
    }
  });

  function handleSubmit() {
    setPosts((prev) => [{ title: titleInput, body: bodyInput }, ...prev]);
    setBodyInput("");
    setTitleInput("");
  }
  return (
    <div>
      <div>
        <label htmlFor="">Title</label>
        {!isTitleValid && <p>Title not valid</p>}
        <input
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          type="text"
        />
        <br />
        <label htmlFor="">Body</label>
        {!isBodyValid && <p>Body not valid</p>}
        <input
          value={bodyInput}
          onChange={(e) => setBodyInput(e.target.value)}
          type="text"
        />
        <br />
        <button
          disabled={!isTitleValid || !isBodyValid}
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </div>
      {posts.lenght === 0 ? (
        <h1>loading...</h1>
      ) : (
        posts.map((post) => <Post title={post.title} body={post.body} />)
      )}
    </div>
  );
}
