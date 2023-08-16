import styles from "./styles.module.scss"
import icon from "../..//assets/icon.png"
import banner from "../../assets/banner.png"
import { PiPencilSimpleLineBold } from "react-icons/pi"

export default function Sidebar(){
    return(
        <aside className={styles.container}>
            
            <img 
                src={banner} 
                alt="Banner"
                className={styles.banner}
            />
            
            <img 
                src={icon} 
                alt="Icon"
                className={styles.icon}
            />

            <h2>Leslie Alexander</h2>
            <h3>UI Designer</h3>

            <button>
                <PiPencilSimpleLineBold/>
                Editar seu perfil
            </button>
        </aside>
    )
}