import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './appRoutes';
import View from '../components/View/View';
import Create from '../components/Create/Create';
import Edit from '../components/Edit/Edit';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoutes.BASE_URL} element={<View />} />
      <Route path={AppRoutes.VIEW} element={<View />} />
      <Route path={AppRoutes.CREATE} element={<Create />} />
      <Route path={AppRoutes.EDIT} element={<Edit />} />
    </Routes>
  );
}

export default CustomRoutes;
