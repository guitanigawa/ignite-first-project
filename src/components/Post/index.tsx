import styles from "./styles.module.scss"
import Icon from "../../assets/icon.png"


export default function Post(){
    return(
        <div className={styles.container}>
            <header>
                <img src={Icon}/>
                
                <section>    
                    <h2>Jane Cooper</h2>
                    <h3>Dev Front-End</h3>
                </section>            
                
            </header>
            
            <div className={styles.messageText}>
                <p>Fala galeraa</p>
            
                
                <p>
                    Acabei de subir mais um projeto incrivel no meu portifa è um projjeto que fiz no NLW Return, evento da Rocketseat. O nome do projetoé doctor Care
                </p>

                <ul>
                    <li>#novoprojeto</li>
                    <li>#nlw</li>
                    <li>#rocketseat</li>
                </ul>

            </div>
        </div>
    )

} 