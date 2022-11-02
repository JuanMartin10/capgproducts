import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import IndexPage from '../pages/index';
import DetailProduct from '../pages/detailproducts';
import Layout from '../layout';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path=":id" element={<DetailProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
