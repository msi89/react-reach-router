import React from "react";
import Page from "../components/page";
import Layout from "../layouts/blank";

const NotFoundPage = () => {
  console.log("404");
  return (
    <Layout>
      <Page>
        <div className="notfound">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
      </Page>
    </Layout>
  );
};

export default NotFoundPage;
