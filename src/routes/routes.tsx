import React from "react";
import { Route, BrowserRouter ,Link} from "react-router-dom";

import home from "./home";



const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { home }  path="/" exact />
          
          
       </BrowserRouter>
   )
}

export default Routes;