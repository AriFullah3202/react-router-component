
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Hello world!</h1>
    },
    {
      path: "/about",
      element: <div>this the about page</div>
    }, {
      path: "/home",
      element: <div>this is home page</div>
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
