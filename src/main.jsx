import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Components.jsx/Home.jsx";
import Error from "./Components.jsx/Error.jsx";
import Destination from "./Components.jsx/Destination.jsx";
import Login from "./Components.jsx/Login.jsx";
import Register from "./Components.jsx/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Private from "./Private/Private.jsx";
import Contact from "./Components.jsx/Contact.jsx";
import Blog from "./Components.jsx/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
  },
  {
    path: "/destination",
    element: <Destination></Destination>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  },
  {
    path: '/blog',
    element: <Blog></Blog>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
