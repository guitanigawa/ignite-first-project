import styles from "./styles.module.scss"
import igniteLogo from "../../assets/logo.svg"

export default function Header(){

    return(
        <header className={styles.container}>
            <img src={igniteLogo} alt="Ignite Logo"/>
            <h1>Ignite Feed</h1>
        </header>
    )

}