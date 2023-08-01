import { Link } from "react-router-dom";

export function Home (){

    return(<> <h1>
        Welcome to  Small Application</h1>
        <div>
        <Link to='/product'>Product page</Link>
        </div>
        </>);
}