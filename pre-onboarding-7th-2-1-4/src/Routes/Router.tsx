import React from "react";
import MainPage from "@/Pages/MainPage";
import CarInforPage from "@/Pages/CarInfoPage";
import NotFound from "@/Pages/NotFound";

import { Route, Routes } from "react-router-dom";
import Layout from "@/Components/Layouts/Layout";

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<CarInforPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Router;
