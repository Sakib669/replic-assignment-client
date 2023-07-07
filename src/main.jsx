import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthProvider from './Providers/AuthProvider.jsx'
import HomeLayout from './pages/layout/HomeLayout.jsx'
import Home from './pages/home/Home.jsx'
import Login from './pages/authentication/Login.jsx'
import Register from './pages/authentication/Register.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import SelectedProducts from './pages/student/SelectedProducts.jsx'
import Payment from './pages/student/Payment.jsx'
import EnrolledClasses from './pages/student/EnrolledClasses.jsx'
import ManageUsers from './pages/admin/ManageUsers.jsx'
import ManageClasses from './pages/admin/ManageClasses.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import DashboardHome from './pages/dashboard/DashboardHome.jsx'
import StudentPrivate from './routes/StudentPrivate.jsx'
import AdminPrivate from './routes/AdminPrivate.jsx'
import Products from './pages/products/Products';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/products',
        element: <Products />,
        // loader: () => axios('http://localhost:5000/classes')
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: '',
        element: <DashboardHome/>
      },
      {
        path: 'studentClasses',
        element: <StudentPrivate><SelectedProducts /></StudentPrivate>
      },
      {
        path: 'studentClasses/pay/:id',
        element: <StudentPrivate><Payment /></StudentPrivate>
      },
      {
        path: 'studentEnrolledClasses',
        element: <StudentPrivate><EnrolledClasses />,</StudentPrivate>
      },
      {
        path: 'admin/manageUsers',
        element: <AdminPrivate><ManageUsers /></AdminPrivate>
      },
      {
        path: 'admin/manageClasses',
        element: <AdminPrivate><ManageClasses /></AdminPrivate>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
    </>
  </React.StrictMode>,
)
