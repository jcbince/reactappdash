import {Route, Routes } from 'react-router-dom'

import { DashBoardPage, LoginPage, PageNotFound } from './pages'


function App() {
  return (
    <>
    <Routes>
      <Route index element={<LoginPage/>}/>
      <Route path="dashboard" element={<DashBoardPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="add" element={<PageNotFound/>}/>
    </Routes>

    </>
  );
}

export default App;
