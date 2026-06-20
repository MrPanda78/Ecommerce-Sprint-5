import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Home from './pages/Home/Home.jsx'
import Products from './pages/Products/Products.jsx'
import ProductsView from './pages/Products/ProductsView.jsx'
import Profile from './pages/Profile/Profile.jsx'

const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "products/:id",
        element: <ProductsView />
      },
      {
        path: "profile",
        element: <Profile />
      }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)