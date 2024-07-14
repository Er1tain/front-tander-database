import '../styles/Auth.css';
import {useNavigate} from "react-router-dom";

export default function Auth() {
    const navigate = useNavigate();
    const return_to_reg = ()=>{
        navigate("/reg");
    }

    return (
        <div id="PageAuthForm">
            <h1>Вход</h1>
            <form>
                <div className={"field"}>
                    <label>Почта</label>
                    <input/>
                </div>
                <div className={"field"}>
                    <label>Пароль</label>
                    <input type={"password"}/>
                </div>
                <button>Войти</button>
            </form>
        </div>
    )
}