import { Link } from "react-router-dom"

function Pelit() {
    return (
        <div>
            <h1>PELIT</h1>
            <br />
            <span>
                Valittavana hirsipuu peli kahdella sanastolla
                Suomen kaupungeilla tai Euroopan pääkaupungeilla.
            </span>
            <br />
            <Link to="/kaupunki">SUOMI</Link>
            <br />
            <Link to="/capital">EUROOPPA</Link>
        </div>
    )
}

export default Pelit