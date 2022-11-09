import React from "react";

import { Route, Routes } from "react-router-dom";
import Layout from "@/Components/Layout";
import NotFound from "@/Pages/NotFound";
import Dashboard from "@/Pages/DashboardPage";
import ADManagementPage from "@/Pages/AdManagementPage";

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/management" element={<ADManagementPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Router;
