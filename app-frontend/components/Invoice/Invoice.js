import React, {useState, useEffect} from 'react'
import Image from 'next/Image'
import Pdf from 'react-to-pdf'
import styles from './Invoice.module.scss'

const ref = React.createRef();

const Invoice = () => {


    return (
        <div className={styles.InvoiceContainer} ref={ref}>
            <div className={styles.InvoiceContainer__header}>
                <div className={styles.InvoiceContainer__header__details}>
                    <h4>Invoice</h4>
                    <h5># INV1122</h5>
                    <p>11:35 AM - Today</p>
                </div>
                <div className={styles.InvoiceContainer__header__right}>
                    <div className={styles.InvoiceContainer__header__right__details}>
                        <span>Customer Details</span>
                        <p>John Doe</p>
                        <span>johndoe@servicesprovider.com</span>
                    </div>
                    <Pdf targetRef={ref} filename="invoice.pdf">
                        {({ toPdf }) => 
                        <div onClick={toPdf} className={styles.InvoiceContainer__header__right__button}>
                            <span>Print</span>
                            <Image src="/assets/printer-blue.png" alt="printer icon" height={20} width={20} />
                        </div>
                        }
                    </Pdf>

                </div>
            </div>
            <div className={styles.InvoiceContainer__table}>
                <span className={styles.InvoiceContainer__table__item}>Item</span>
                <span className={styles.InvoiceContainer__table__qty}>Quantity</span>
                <span className={styles.InvoiceContainer__table__price}>Price -  ₹</span>
            </div>
            {/* List of items in the Invoice*/}
            <div className={styles.InvoiceContainer__body}>
                <span className={styles.InvoiceContainer__table__item}>Prawn & Chicken Sui Mai</span>
                <span className={styles.InvoiceContainer__table__qty}>2</span>
                <span className={styles.InvoiceContainer__table__price}>430.00</span>
            </div>
            {/* Invoice Footer*/}
            <div className={styles.InvoiceContainer__footer}>
                <div className={styles.InvoiceContainer__footer__row}>
                    <p>Sub Total</p>
                    <h4> ₹ 0</h4>
                </div>
                <div className={styles.InvoiceContainer__footer__row}>
                    <p>Tax(12.36%)</p>
                    <h4> ₹ 0</h4>
                </div>
                <div className={styles.InvoiceContainer__footer__row}>
                    <p>Discount</p>
                    <h4> ₹ - 100</h4>
                </div>
                <div className={styles.InvoiceContainer__footer__row}>
                    <p>Grand Total</p>
                    <h4> ₹ 0</h4>
                </div>
            </div>
        </div>
    )
}

export default Invoice
