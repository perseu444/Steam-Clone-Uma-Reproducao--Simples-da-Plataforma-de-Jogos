import styles from './navcontent.module.css'

export default function Navcontent() {
    return (
        <div className={styles.navcontent}>
            <div className={styles.navtext}>
                <ul >
                    <li><a href="#" className={styles.checked}>LOJA</a></li>
                    <li><a href="#">COMUNIDADE</a></li>
                    <li><a href="#">USER</a></li>
                    <li><a href="#">CONVERSA</a></li>
                    <li><a href="#">SUPORTE</a></li>
                </ul>
            </div>


        </div>
    )
}