import "./styles.scss"
import igniteLogo from "../../assets/logo.svg"

export default function Header(){

    return(
        <header className="container">
            <img src={igniteLogo} alt="Ignite Logo"/>
            <h1>Ignite Feed</h1>
        </header>
    )

}