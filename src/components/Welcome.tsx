import {useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import "../styles/Welcome.css";
import MagnitLogo from "./Welcome/MagnitLogo";

export default function Welcome() {
    const navigate = useNavigate();

    const Welcome = useRef<any>();
    const [animationEnd, changeStatus] = useState<boolean>(false);

    useEffect(()=>{
        setTimeout(()=> {
                Welcome.current.style.opacity = 0;
                Welcome.current.style.marginBottom = "100%";
                changeStatus(true);
            }, 700
        )}, [])
    useEffect(() => {
        setTimeout( ()=>navigate("/auth"),3000)
    }, [animationEnd]);

    return (
        <div id="Welcome" ref={Welcome}>
            <MagnitLogo/>
        </div>
    );
}