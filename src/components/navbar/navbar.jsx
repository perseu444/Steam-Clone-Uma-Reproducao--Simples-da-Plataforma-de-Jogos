import styles from './navbar.module.css'
import Navcontent from '@/components/navcontent/navcontent'
import Logo from '@/components/logo/logo'
import Usericon from '@/components/usericon/usericon'


export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Logo />
            <Navcontent />
            <Usericon />
        </nav>
        
    )

}