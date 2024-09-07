import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "./App";
import AnnouncementPage from "./pages/AnnouncementPage";
import ClothingCategoryPage from "./pages/ClothingCategoryPage";
import ClothingListPage from "./pages/ClothingListPage";
import SlidePage from "./pages/SlidePage";
import StatisticsPage from "./pages/StatisticsPage";
import OrderListPage from "./pages/OrderListPage";
import OrderCommentPage from "./pages/OrderCommentPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/statistics" />, // 用于自动重定向到统计页面
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "statistics",
        element: <StatisticsPage />,
      },
      {
        path: "slide",
        element: <SlidePage />,
      },
      {
        path: "announcement",
        element: <AnnouncementPage />,
      },
      {
        path: "clothing",
        children: [
          {
            path: "list",
            element: <ClothingListPage />,
          },
          {
            path: "category",
            element: <ClothingCategoryPage />,
          },
        ],
      },
      {
        path: "order",
        children: [
          {
            path: "list",
            element: <OrderListPage />,
          },
          {
            path: "comment",
            element: <OrderCommentPage />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
