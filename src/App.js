import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';

import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';

import SettingsView from 'src/views/settings/SettingsView';
import TestPage from './views/testPage/TestPage';
import UserDetail from './views/userDetail/UserDetail';

const App = () => {
  const routes = [
    // localStorage.getItem('logen-authorization')
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: 'login',
          element: localStorage.getItem('logen-authorization') ? (
            <Navigate to="/app/customers" />
          ) : (
            <LoginView />
          )
        },

        { path: '404', element: <NotFoundView /> },
        {
          path: '/',
          element: localStorage.getItem('logen-authorization') ? (
            <Navigate to="/app/customers" />
          ) : (
            <LoginView />
          )
        },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: 'app',

      // element: () => {
      //   if (!localStorage.getItem('logen-authorization')) {
      //     return <Navigate to={'/login'} />;
      //   }
      //   return <DashboardLayout />;
      // },
      element: localStorage.getItem('logen-authorization') ? (
        <DashboardLayout />
      ) : (
        <Navigate to={'/login'} />
      ),

      // element: <DashboardLayout />,
      children: [
        { path: 'account', element: <AccountView /> },
        { path: 'customers', element: <CustomerListView /> },
        { path: 'dashboard', element: <DashboardView /> },
        { path: 'products', element: <ProductListView /> },
        { path: 'settings', element: <SettingsView /> },
        { path: 'adddriver', element: <TestPage /> },
        { path: 'userdetail/:id', element: <UserDetail /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    }
  ];

  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
