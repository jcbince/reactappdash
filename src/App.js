import {Route, Routes } from 'react-router-dom'
 
import { DashBoardPage, LoginPage, PageNotFound, Update, Add, Delete} from './pages'


function App() {
  return (
    <>
    <Routes>
           <Route path="/" index  element={<LoginPage/>}/>
           <Route path="dashboard"  element={<DashBoardPage/>} >
                {/* <Route index   element={<AllProductsPanel title="All Products"/>}/>
                <Route path="add"   element={<AddProductPanel title="Add New Product "/>}/> */}
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
