import styles from "./styles.module.css"
import IgniteLogo from "../../assets/logo.svg"

export default function Header(){

    return(
        <header className={styles.Container}>
            <img src={IgniteLogo} alt="Ignite Logo"/>
            Ignite Feed
        </header>
    )

}