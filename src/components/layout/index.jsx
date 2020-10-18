import React from "react";

import Seo from "./seo";

const Layout = ({ children, title }) => (
  <>
    <Seo title={title} />
    {children}
  </>
);

export default Layout;
