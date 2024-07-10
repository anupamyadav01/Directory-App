import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddNewPerson from "./pages/AddNewPerson/AddNewPerson.jsx";
import RetrieveInfo from "./pages/RetrieveInfo/RetrieveInfo.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AddNewPerson />,
  },
  {
    path: "/retrieve-info",
    element: <RetrieveInfo />,
  },
]);

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
