import Add from 'pages/add/Add';
import Delete from 'pages/delete/Delete';
import Update from 'pages/update/Update';
import {Route, Routes } from 'react-router-dom'
 
import { DashBoardPage, LoginPage, PageNotFound} from './pages'


function App() {
  return (
    <>
    <Routes>
      <Route path="/"  element={<LoginPage/>}/>
           <Route path="dashboard"  element={<DashBoardPage/>} >
                <Route index   element={<DashBoardPage title="All Products"/>}/>
                <Route path="add" element={<Add/>}/>
                <Route path="update" element={<Update/>}/>
                <Route path="delete" element={<Delete/>}/>
       
            </Route>
        
          
 
           <Route path="*"  element={<PageNotFound/>}/>
      
           
    </Routes>

    </>
  );
}

export default App;
