import UserAction from '../API/UserAction';
import '../styles/Auth.css';
import {useNavigate} from "react-router-dom";

export default function Auth() {
    const navigate = useNavigate();
    

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
                <button onClick={()=>UserAction.Auth(navigate)}>Войти</button>
            </form>
        </div>
    )
}