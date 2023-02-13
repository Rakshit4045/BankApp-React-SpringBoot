import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
    const navigate = useNavigate();
    useEffect(() => {
        const check = window.localStorage.getItem("user") ? true : false;
        if(!check){
            navigate("/");
        }
    },[navigate])
    return(
        true
    )
}
