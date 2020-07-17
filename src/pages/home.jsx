import React from "react";
import Page from "../components/page";
import Layout from "../layouts/default";

const HomePage = (props) => {
  console.log("home props", props);
  return (
    <Layout>
      <Page>
        <h1>Welcome</h1>
      </Page>
    </Layout>
  );
};

export default HomePage;
