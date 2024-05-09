import ErrorPage from "./pages/ErrorPage";
import Work from "./pages/Work";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <> 
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
