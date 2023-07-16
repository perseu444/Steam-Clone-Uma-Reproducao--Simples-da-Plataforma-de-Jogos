import Image from 'next/image'
import style from './usericon.module.css'
import { BsBellFill } from 'react-icons/bs'
import { AiFillCaretDown } from 'react-icons/ai'

export default function Usericon() {
    return (
        <div className={style.usericon}>
            <div className={style.botao1}>
                <Image src='/downloadsteam.png' width={10} height={10} />
                <p>
                    Instale o Steam
                </p>
            </div>
            <div className={style.botao2}>
                <BsBellFill size={13} />

            </div>
            <div className={style.userlabel}>
                <div className={style.username}>
                    <p>Persheus</p>
                    <AiFillCaretDown size={10} />
                </div>
                <div className={style.usercoin}>
                    <p>R$ 0.00</p>

                </div>


            </div>

            <Image className={style.userpfp} src='/usericon.png' width={40} height={40} />
        </div>
    )
}