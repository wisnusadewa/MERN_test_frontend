import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicLayout from './views/Layout/publicLayout';
import LandingPage from './views/pages/LandingPage';
import ProtectLayout from './views/Layout/protectLayout';
import Dashboard from './views/pages/Dashboard';
import LoginPage from './views/components/Login/LoginPage';
import RegisterPage from './views/components/Register/RegisterPage';
import FormEditProduct from './views/components/Form/FormEditProduct';
import Profile from './views/pages/Profile';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicLayout />,
      children: [
        {
          path: '/',
          element: <LandingPage />,
        },
      ],
    },
    {
      path: '/dashboard',
      element: <ProtectLayout />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/dashboard/profile/:id',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '/edit/:id',
      element: <FormEditProduct />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
