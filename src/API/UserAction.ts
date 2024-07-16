export default class UserAction {
    //Mock
    static Auth(navigate: any) {
        alert("Вход в систему выполнен!")
        navigate('/database');
    }
}