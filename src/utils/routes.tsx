import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../Layout";
import MainPage from "../pages/mainPage/MainPage";
import ExercisePage from "../pages/exrcisePage/ExercisePage";
import {NotFoundPage} from "../pages/notFoundPage/NotFoundPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // Используем Layout для общего оформления
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: "/exercise",
                element: <ExercisePage/>
            },

            {
                path: "*",
                element: <NotFoundPage/>
            }
        ]
    }
]);