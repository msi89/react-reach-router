import React from "react";
import api from "../api";
import { useEffect } from "react";
import Page from "../components/page";
import Layout from "../layouts/default";

const AboutPage = () => {
  useEffect(() => {
    api
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log("response", api.format(response));
      })
      .catch((error) => {
        console.error("error api", error);
      });
  });

  return (
    <Layout>
      <Page>
        <div className="container" style={{ paddingTop: "50px" }}>
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            nisi officia mollitia quibusdam consequatur quae libero
            reprehenderit quidem! Reprehenderit iusto libero consequuntur
            ducimus beatae eius, at asperiores sunt perferendis quod?
          </p>
        </div>
      </Page>
    </Layout>
  );
};

export default AboutPage;
