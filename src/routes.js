import React from 'react';
import { Navigate } from 'react-router-dom';
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

console.log('====================================');
console.log(localStorage.getItem('logen-authorization'));
console.log('====================================');

const routes = [
  // localStorage.getItem('logen-authorization')
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },

      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <LoginView /> },
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
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;

// const ROUTES = [
//   { path: "/", key: "ROOT", exact: true, component: Home },
//   { path: "/login", key: "LOGIN", component: Login },
//   {
//     path: "/app",
//     key: "APP",
//     component: (props) => {
//       if (!localStorage.getItem("user")) {
//         return <Redirect to={"/login"} />;
//       }
//       return <RenderRoutes {...props} />;
//     },
//     routes: [
//       {
//         path: "/app",
//         key: "APP_ROOT",
//         exact: true,
//         component: () => <h1>App Index</h1>,
//       },
//       {
//         path: "/app/page",
//         key: "APP_PAGE",
//         exact: true,
//         component: () => <h1>App Page</h1>,
//       },
//     ],
//   },
// ];

// export default ROUTES;

// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       exact={route.exact}
//       render={(props) => <route.component {...props} routes={route.routes} />}
//     />
//   );
// }

// export function RenderRoutes({ routes }) {
//   return (
//     <Switch>
//       {routes.map((route, i) => {
//         return <RouteWithSubRoutes key={route.key} {...route} />;
//       })}
//       <Route component={() => <h1>Not Found!</h1>} />
//     </Switch>
//   );
// }
