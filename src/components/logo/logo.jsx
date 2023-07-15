import Image from 'next/image'
import styles from '@/components/logo/logo.module.css'

export default function Logo(){
    return(
        <div className={styles.logo}>
            <Image src='/logo.svg' width={176} height={44}/>
        </div>
    )
}