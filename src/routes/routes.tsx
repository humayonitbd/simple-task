import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FirstPage from "../pages/FirstPage/FirstPage";
import SecondPage from "../pages/SecondPage/SecondPage";
import UserShowPage from "../pages/UserShowPage/UserShowPage";
import DepartmentList from "../pages/DepartmentList/Departments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FirstPage />,
      },
      {
        path: "/first-page",
        element: <FirstPage />,
      },
      {
        path: "/userShow-page",
        element: <UserShowPage />,
      },
      {
        path: "/second-page",
        element: <SecondPage />,
      },
      {
        path: "/listing-department-item",
        element: <DepartmentList />,
      },
    ],
  },
]);

export default router;
