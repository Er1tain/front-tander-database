import Table from "./Database/Table";
import '../styles/Database.css';

export default function Database() {
    return (
        <div id={"database"}>
            <h1>Учёт устройств</h1>
            <Table/>
            <div id="button_panel">
                <button id="back"></button>
                <button id="next"></button>
            </div>
        </div>
    )
}