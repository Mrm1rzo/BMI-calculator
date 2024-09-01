import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import RootLayout from "./layout/RootLayout";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
