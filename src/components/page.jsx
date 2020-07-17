import React from "react";
import { useEffect } from "react";

const Page = ({ title, children }) => {
  useEffect(() => {
    document.title = title || "Reach Router";
  });
  return <div className="app-page">{children}</div>;
};

export default Page;
