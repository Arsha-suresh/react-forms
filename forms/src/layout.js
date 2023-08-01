import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";

const router =createBrowserRouter([{path:'/', element:<Home/>},
                                    {path:'/product', element:<Product/>}]);

export function Layout(){

return (<><header>
<div>Welcome to APP</div>
</header>
<div>
<RouterProvider router={router}/>
</div>
<footer>
<div>Footer section</div>
</footer>
</>);
}