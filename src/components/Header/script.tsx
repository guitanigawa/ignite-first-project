import styles from "./styles.module.css"
import IgniteLogo from "./IgniteLogo.svg"

export default function Header(){

    return(
        <div className={styles.Container}>
            <img src={IgniteLogo} alt="Ignite Logo"/>
            Ignite Feed
        </div>
    )

}