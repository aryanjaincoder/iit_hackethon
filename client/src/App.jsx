import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Layout from "./Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CodeEditor from "./pages/codeEditor/CodeEditor";
import Courses from "./pages/courses/Courses";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/developer",
          element: <CodeEditor />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
