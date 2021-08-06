import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { Input } from 'antd';
import styles from './Modal.module.scss'

const Modal = ({closeModal}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [inputFields, setInputFields] = useState([{
        itemName: '',
        itemQty: '',
        itemPrice: ''
    }])
    

    //handling input changes for items

    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    }

    // adding new item input field

    const handleAddFields = () => {
        setInputFields([...inputFields, { itemName: '', itemQty: '', itemPrice: ''}]);
        console.log("add fields triggered");
    }

    return (
        <>
        <div className={styles.ModalOverlay} />
            <div className={styles.ModalContainer}>
                <div className={styles.ModalContainer__header}>
                    <div className={styles.ModalContainer__header__top}>
                        <h2>Create New Invoice</h2>
                        <p>Order No: 1234</p>
                        <div onClick={() => closeModal(false)} className={styles.ModalContainer__header__top__close}>
                            <Image src="/assets/close-btn.png" height={20} width={20} alt="close" />
                        </div>

                    </div>
                    <div className={styles.ModalContainer__header__bottom}>
                    {currentStep === 0 && <h3>Customer Details</h3>}
                    {currentStep === 1 && <h3>Product Details</h3>}
                    {currentStep === 0 && 
                        <span onClick={()=> setCurrentStep(currentStep + 1)}>
                            Skip
                            <div  className={styles.ModalContainer__header__bottom__skip}>
                                <Image  src="/assets/skip-icon.png" height={17} width={17} alt="skip" />
                            </div>
                        </span> 
                    }
                    {currentStep === 1 && 
                        <div className={styles.product__details}>
                            <div className={styles.Header}>
                                <p>Customer Details</p>
                                <h4>John Doe</h4>
                                <h5>johndoe@gmail.com</h5>
                            </div>
                            <div onClick={()=> setCurrentStep(currentStep- 1)}  className={styles.ModalContainer__header__bottom__edit}>
                                <Image  src="/assets/edit-icon.png" height={20} width={20} alt="edit" />
                            </div>
                        </div> 
                    }
                    </div>
                </div>
                <div className={styles.ModalContainer__body}>

                    {/* Step 1*/}
                    {currentStep === 0 &&
                    (<div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label>Full Name</label>
                            <input className={styles.input} placeholder="Customer Name" />
                        </div>
                        <div className={styles.col}>
                            <label>Phone Number</label>
                            <div className={styles.row__phone}>
                               <span>+91</span>
                               <input className={styles.phone} placeholder="Phone Number" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label>Address</label>
                            <textarea rows={10} className={styles.input} placeholder="Complete Address" />
                        </div>
                        <div className={styles.col}>
                            <div className={styles.col__address}>
                                <label>Email ID</label>
                                <input type="email" className={styles.input} placeholder="Customer Email Address" />
                            </div>
                            <div className={styles.col__address}>
                                <label>Pincode</label>
                                <input type="email" className={styles.pin} placeholder="56067" />
                            </div>
                        </div>
                    </div>
                    </div>)
                    }
                    {/* Step 2*/}                    
                    {currentStep === 1 && (
                        <div>
                            <div className={styles.ModalContainer__body__table}>
                                <span className={styles.ModalContainer__body__table__item}>Item</span>
                                <span className={styles.ModalContainer__body__table__qty}>Quantity</span>
                                <span className={styles.ModalContainer__body__table__price}>Price - ₹</span>
                            </div>
                            {inputFields.map((inputField, index) => (
                            <div key={index} className={styles.row__border}>
                                <Input onChange={(event) => handleChangeInput(index, event)} className={styles.input__item__name} value={inputField.itemName} type="text" placeholder="Please enter Item Name" />
                                <Input onChange={(event) => handleChangeInput(index, event)} className={styles.input__item__qty} value={inputField.itemQuantity} type="text" placeholder="0.00" />
                                <Input onPressEnter={()=> handleAddFields()}	 onChange={(event) => handleChangeInput(index, event)} className={styles.input__item__price} value={inputField.itemPrice} type="text" placeholder="0.00" />
                                <span onClick={()=> handleAddFields()} className={styles.input__item__}>
                                    <Image src="/assets/enter-icon.png" alt="enter" width={18} height={18} />
                                </span>
                            </div>
                            ))}
                        </div>
                    )}
                </div>
                    {currentStep === 0 && (
                    <div className={styles.ModalContainer__footer}>
                        <button onClick={()=> setCurrentStep(currentStep +1)}>
                            Proceed
                        </button>
                    </div>
                    )}
                    {currentStep === 1 && (
                     <div className={styles.ModalContainer__footer__save}>
                         <div>
                             <h3>Tax</h3>
                             <p>0.00</p>
                        </div>
                        <div>
                             <h3>Discount</h3>
                             <p>0.00</p>
                        </div>
                        <div>
                             <h3>Grand Total</h3>
                             <p>0.00</p>
                        </div>
                        <button onClick={()=> console.log("save")}>
                                 Save
                        </button>
                    </div>
                    )}
            </div>
        </>
    )
}

export default Modal
