import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Orders from './pages/orders/Orders';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProductCreate from './pages/products/ProductCreate';
import ProductEdit from './pages/products/ProductEdit';
import Products from './pages/products/Products';
import Register from './pages/Register';
import { RoleCreate } from './pages/roles/RoleCreate';
import { RoleEdit } from './pages/roles/RoleEdit';
import Roles from './pages/roles/Roles';
import UserCreate from './pages/users/UserCreate';
import UserEdit from './pages/users/UserEdit';
import Users from './pages/users/Users';
import Profile from './pages/Profile';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/profile'} exact component={Profile} />
        <Route path={'/register'} exact component={Register} />
        <Route path={'/login'} component={Login} />
        <Route path={'/users'} exact component={Users} />
        <Route path={'/users/create'} component={UserCreate} />
        <Route path={'/users/:id/edit'} component={UserEdit} />
        <Route path={'/roles'} exact component={Roles} />
        <Route path={'/roles/create'} exact component={RoleCreate} />
        <Route path={'/roles/:id/edit'} exact component={RoleEdit} />
        <Route path={'/products'} exact component={Products} />
        <Route path={'/products/create'} exact component={ProductCreate} />
        <Route path={'/products/:id/edit'} exact component={ProductEdit} />
        <Route path={'/orders'} exact component={Orders} />
      </BrowserRouter>
    </div>
  );
}

export default App;
