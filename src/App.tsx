import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Users from "./pages/users/Users";
import Root from "./pages/root/Root";
import CreateUser from "./pages/createUser/CreateUser";
import EditUser from "./pages/updateUser/UpdateUser";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "overview",
          element: <Users />,
        },
        {
          path: "create",
          element: <CreateUser />,
        },
        {
          path: "edit/:userId",
          element: <EditUser />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
