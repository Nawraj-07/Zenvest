/*import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Homepage from './landing page/Home/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes path="/" element={<Homepage/> }></Routes>
  </BrowserRouter>
);*/

/*import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Homepage from './landing page/Home/Homepage';
import Signup from './landing page/Signup/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/" element={<Homepage />} ></Route>
      <Route path="/" element={<Homepage />} ></Route>
    </Routes>
  </BrowserRouter>
);*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';


// Route Components
import Homepage from './landing page/Home/Homepage';
import Signup from './landing page/Signup/Signup';
import About from './landing page/About/About';
import Product from './landing page/Product/ProductPage';
import Pricing from './landing page/Pricing/Pricingpage';
import Support from './landing page/Support/SupportPage';
import Login from './landing page/Signup/login';
import Dashboard from './dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoute';


import Layout from './landing page/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  </BrowserRouter>
);

