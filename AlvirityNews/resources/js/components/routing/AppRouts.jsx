import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import rout from './rout';


const AppRouts = ()=> {
  return (
     
      <Routes>
    
      {
          rout.map((e)=>        
             <Route element = {e.element} path = {e.path} />     
            )
      }
       <Route
        path="*"
        element={ <Navigate to="/"  />}
    />
      </Routes>
      
     

    )
}
export default AppRouts;