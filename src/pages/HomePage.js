import React, { useState, useEffect } from "react";
import { MenuApp, Main, Footer } from "../components";

import { APIManager } from "../helpers";
import { NAME_PROJECT } from "../constants";

const { callMethod } = APIManager;

const HomePage = ({ admin, userId, setUserId }) => {
  useEffect(() => {
    document.title = NAME_PROJECT;
  }, []);

  return (
    <>
      <MenuApp userId={userId} setUserId={setUserId} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          justifyContent: "space-between",
          // width: "100%",
          height: "100vh",
          // paddingTop: "40px"
        }}
      >
        <Main />
        <Footer />
      </div>
    </>
  );
};
export { HomePage };
