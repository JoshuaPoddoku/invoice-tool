import React from 'react'
import styles from './OrderItem.module.scss'


const OrderItem = (invoiceID, itemCount, customerName, timestamp, price ) => {




return (
        <div className={styles.ItemContainer}>
            <div className={styles.ItemContainer__Inner}>
                <div className={styles.ItemContainer__Left}>
                    <p className={styles.ItemContainer__Left__Heading}>
                        INV. # - 1122
                    </p>
                    <p className={styles.ItemContainer__Left__Heading}>
                        Items - 05
                    </p>
                    <p className={styles.ItemContainer__Left__Name}>
                        Jeph Paul Alapat
                    </p>
                </div>
                <div className={styles.ItemContainer__Right}>
                    <p>
                        11:35 AM - Today
                    </p>
                    <h1>
                        ₹3,509
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default OrderItem
