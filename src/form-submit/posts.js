import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./posts.css";
import { useEffect } from "react";
import { useState } from "react";

function Posts() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(" https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setPosts(result.posts);
          setIsLoaded(true);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [isLoaded]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
  <div className="button-container">
     <div className="post-product">
        <Link className="button" to={"/posts"}>posts</Link>
        <Link className="button" to={"/products"}>products</Link>
      </div>
    <div className="posts-container">
     
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className="containt" key={post.id}>
            <h3>{post.title}</h3>
            <h3>{post.userId}</h3>
            <h3>{post.id}</h3>
            <h3>{post.body}</h3>
            <h3>{post.reactions}</h3>
            <div className="tags">
              {
                post.tags.map((tag) => (
                  <h3>{tag}</h3>
                ))
              }
            </div>
          </div>
        ))
      ) : (
        <div>There is no data</div>
      )}
    </div>
    </div>
  );
}
export default Posts;
