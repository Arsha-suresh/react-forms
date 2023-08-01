import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function ErrorPage(){
const navigate = useNavigate();
    useEffect(()=>{
        navigate('/');

    })

    return <Link to="/">Error Page</Link>;
}