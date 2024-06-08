import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import More from './pages/More'
import About from './pages/About'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Form from './pages/Form'
import SubscriptionContext from './context/SubscriptionContext'

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Home/>
  },
  {
    path: `/more`,
    element: <More/>
  },
  {
    path: `/about`,
    element: <About/>
  },
  {
    path: `/more/form`,
    element: <Form/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SubscriptionContext>
      <RouterProvider router={router}/>
    </SubscriptionContext>
  </React.StrictMode>,
)
