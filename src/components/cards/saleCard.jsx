import Image from 'next/image'
import styles from './saleCard.module.css'
import Button from '@/components/forms/button/button'

export default function SaleCard() {
    return (
        <div className={styles.salecard}>
            <Image src='/products/minecraft.jpg ' width={250} height={300} />
            <div className={styles.info}>
                <div className={styles.title}>
                    <h3>Oferta Exclusiva</h3>
                </div>
                <div className={styles.salecardprice}>
                    <div className={styles.percent}>-20%</div>
                    <div className={styles.price}>
                        <p className={styles.fullprice}>R$99,99</p>
                        <h4 className={styles.discountprice}>R$89,99</h4>
                    </div>
                </div>
                <Button>Adicionar ao Carrinho</Button>

            </div>

        </div>
    )
}