import React, { useContext } from "react";
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
import { Context, ContextProvider } from "./context/Context";
import Quiz from "./pages/Quiz/Quiz";
import UserPreferences from "./pages/Intrest/Intrest";

function App() {
  const { user } = useContext(Context);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: user ? <Home/> : <Register/>,
        },
        
        {
          path: "/practice",
          element: user ? <Quiz/> : <Register/>,
        },
        {
          path: "/login",
          element: user ? <Home/> : <Login/>,
        },
        {
          path: "/register",
          element: user ? <Home/> : <Register/>,
        },
        {
          path: "/about",
          element: user ? <About/> : <Register/>,
        },
        {
          path: "/blog",
          element: user ? <Blog/> : <Register/>,
        },
        {
          path: "/contact",
          element: user ? <Contact/> : <Register/>,
        },
       
        {
          path: "/developer",
          element: user ? <CodeEditor/> : <Register/>,
        },
        {
          path: "/courses",
          element: user ? <Courses/> : <Register/>,
        },
      ],
    },
  ]);
  return (
    <ContextProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
