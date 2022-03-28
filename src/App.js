import {Route, Routes } from 'react-router-dom'
 
import { DashBoardPage, LoginPage, PageNotFound} from './pages'
import { AllProductsPanel, DeleteProductPanel, UpdateProductPanel } from 'components/panels';
import AddProductPanel from 'components/panels/DeleteProductPanel';

function App() {
  return (
    <>
    <Routes>
           <Route path="/" index  element={<LoginPage/>}/>
           <Route path="dashboard"  element={<DashBoardPage/>} >
                <Route index   element={<AllProductsPanel title="All Products"/>}/>
                <Route path="add"   element={<AddProductPanel title="Add New Product "/>}/> 
                <Route path="update"   element={<UpdateProductPanel title="Update Product "/>}/> 
                <Route path="delete"   element={<DeleteProductPanel title="Delete Product "/>}/> 

       
            </Route>
        
          
 
           <Route path="*"  element={<PageNotFound/>}/>
         </Routes>
      
    </>
  );
}

export default App;
