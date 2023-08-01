import { Link, Outlet } from "react-router-dom";

export function Home (){

    return(<> <h1>
        Welcome to  Home Page</h1>
        <div className="container">
        <Link to='/product'>Product page</Link>
        </div>
        <div> <Link to='/regForm'>Navigate to Forms</Link></div>
        <section>
        <div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
        </section>
        <aside>
            Aside Section
        </aside>
        </>);
}