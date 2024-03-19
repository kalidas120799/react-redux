import { createBrowserRouter } from "react-router-dom";
import { Home, PNF } from "../pages";

export default createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/*",
        element: <PNF />,
    }
]);