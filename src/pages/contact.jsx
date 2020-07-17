import React from "react";
import Page from "../components/page";
import Layout from "../layouts/default";

const ContactPage = () => {
  return (
    <Layout>
      <Page>
        <div className="container" style={{ paddingTop: "50px" }}>
          <h1>Contact us</h1>
        </div>
      </Page>
    </Layout>
  );
};

export default ContactPage;
