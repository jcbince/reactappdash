import {Route, Routes } from 'react-router-dom'
 
import {LoginPage, PageNotFound, DashBoardPage} from './pages'
import { AllProductsPanel} from 'components/panels';
import AddProductPanel from 'components/panels/AddProductPanel';

function App() {
  return (
    <>
     <Routes>
           <Route path="/"  element={<LoginPage/>}/>
           <Route path="dashboard"  element={<DashBoardPage/>} >
                <Route index   element={<AllProductsPanel title="All Products"/>}/>
                <Route path="add"   element={<AddProductPanel title="Add New Product "/>}/>
       
            </Route>
        
          
 
           <Route path="*"  element={<PageNotFound/>}/>
         </Routes>
      
    </>
  );
}

export default App;
