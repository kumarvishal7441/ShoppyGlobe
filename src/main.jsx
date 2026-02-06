import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './Components/Error.jsx'
import ProductList from './Components/ProductList.jsx'
import ProductDetails from './Components/ProductDetails.jsx'
import CartItem from './Components/CartItem.jsx'

const root = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<ProductList/>
      },
      {
        path:'/productdetail/:id',
        element:<ProductDetails/>
      },
      {
        path:'/cart',
        element:<CartItem/>
      }
    ],
    errorElement:<Error/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={root}/>
  </StrictMode>,
)
