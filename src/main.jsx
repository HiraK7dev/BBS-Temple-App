import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import More from './pages/More'
import About from './pages/About'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Form from './pages/Form'
import SubscriptionContext from './context/SubscriptionContext'
import User from './pages/User'
import Login from './pages/Login'
import ProtectedRoutes from './util/ProtectedRoutes'

const router = createBrowserRouter([
  {
    path: `/`,
    element: <ProtectedRoutes/>,
    children: [
      {
        path: ``,
        element: <Home/>
      },
      {
        path: `:userId`,
        element: <User/>
      },
      {
        path: `more`,
        element: <More/>
      },
      {
        path: `about`,
        element: <About/>
      },
      {
        path: `more/form`,
        element: <Form/>
      },
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SubscriptionContext>
      <RouterProvider router={router}/>
    </SubscriptionContext>
  </React.StrictMode>,
)
