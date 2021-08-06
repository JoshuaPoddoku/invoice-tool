import React from 'react'
import Image from 'next/image'
import styles from './Button.module.scss';

const Button = ( {onClick}) =>{
    return (
        <div onClick={onClick} className={styles.circle}>
            <div>
                <Image
                    src="/assets/plus-white.png"
                    alt="plus icon"
                    width={30}
                    height={30}
                />
            </div>
        </div>
    )
}

export default Button
