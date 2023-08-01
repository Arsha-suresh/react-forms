import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { SimpleForm } from "./forms/simpleform";
import { ErrorPage } from "./pages/error";

const router =createBrowserRouter([
    
    {path:'/', 
    element:<Home/> , 
    errorElement: <ErrorPage/>,
    children:[
        {path:'/regForm', element: <SimpleForm></SimpleForm>}
    ]},
                                    {path:'/product', element:<Product/>}]);

export function Layout(){

return (<><header>
<div> Header Section</div>
</header>
<div>
<RouterProvider router={router}/>

</div>
<footer>
<div>Footer section</div>
</footer>
</>);
}