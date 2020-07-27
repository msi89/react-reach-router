import React, { useEffect, useState } from "react";
import api from "../../api";
import Page from "../../components/page";
import Layout from "../../layouts/default";
import { Link } from "@reach/router";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("error api", error);
      });
  }, []);

  return (
    <Layout>
      <Page>
        <div className="container" style={{ paddingTop: "50px" }}>
          {posts.map((post, k) => (
            <Link
              key={k}
              style={{ margin: "10px", textDecoration: "None" }}
              to={`/posts/${post.id}`}
            >
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </Link>
          ))}
        </div>
      </Page>
    </Layout>
  );
};

export default PostsPage;
