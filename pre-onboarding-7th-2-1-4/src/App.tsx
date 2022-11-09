import React from "react";
import Router from "./Routes/Router";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
