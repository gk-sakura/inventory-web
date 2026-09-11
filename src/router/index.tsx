import { createBrowserRouter, Navigate } from 'react-router'
import App from '../App'
import LoginPage from "../pages/login";
import Products from "@/pages/products";

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
      path: '/',
      element: <App />,
      children: [
          {
              index: true,
              element: <Navigate to="/dashboard" replace />
          },
          {
              path: 'dashboard',
              element: <div>首页</div>
          },
          {
              path: 'products',
              element: <Products />
          },
          {
              path: '*',
              element: <div>页面不存在</div>
          }
      ]
  }
])
