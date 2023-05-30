import AddCard from "../Pages/Client/Add-Card/AddCard";
import Detail from "../Pages/Client/Details/Detail";
import Home from "../Pages/Client/Home";
import MainRoot from "../Pages/Client/MainRoot";

export const ROUTES = [
  {
    path: "",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/add-card",
        element: <AddCard />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
];
