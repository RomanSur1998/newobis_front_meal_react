import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../page/MainPage";
import DetailMeal from "../page/DetailMeal";

const MainRoutes = () => {
  const COLLECTION_ROUTES = [
    { link: "/", element: <MainPage />, id: 1 },
    { link: "/details/:id", element: <DetailMeal />, id: 3 },
  ];
  return (
    <Routes>
      {COLLECTION_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
