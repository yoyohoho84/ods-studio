import React, { useState, useEffect } from "react";
import { MenuApp, Main, Footer } from "../components";

import { APIManager } from "../helpers";
import { NAME_PROJECT } from "../constants";

const { callMethod } = APIManager;

const ServicesPage = ({ admin, userId, setUserId }) => {
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            color: "white",
            padding: "40px",
          }}
        >
          <h3>- Разрабатываем приложения VK Mini apps</h3>
          <h3>- Разрабатываем сайты на ReactJS c администрируемой панелью</h3>
          <h3>- Осуществляем техническую поддержку проектов</h3>
          <h3>- Помогаем реализовать геймификацию вашего бизнеса</h3>
        </div>
        <Footer />
      </div>
    </>
  );
};
export { ServicesPage };
