import * as React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Tasks from "../components/Tasks/Tasks";
import { Contact } from "../components/Contact/Contact";


export default function Router(){
let element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "tasks",
          element: <Tasks/>,
        },
        {
          path: "contact",
          element: <Contact/>
        },
      ],
    },
    // {
    //     path: "/",
    //     element: <Navigate replace to={ROUTES_PATH.HOME} />,
    // },
    // {
    //     path: ROUTES_PATH.ERROR_PAGE_ROUTE,
    //     element: <ErrorPage />,
    // },
  ]);

  return element;
}