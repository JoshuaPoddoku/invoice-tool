import React, {useState, useEffect} from 'react'
import OrderItem from '../OrderItem/OrderItem'
import styles from './Sidebar.module.scss'
import axios from 'axios';

//dummy API created @ https://retool.com/api-generator/
const apiURL = 'https://retoolapi.dev/wnHVgg/invoice';


const Sidebar = () => {

    const [totalCount, setTotalCount] = useState(0);
    
    //State to fetch items array
    const [items, setItems] = useState([]);

    //fetching data for sidebar

    const data = async () => {
        try{
            let res = await axios.get(apiURL);
            let result = res.data;
            let count = res.data.length;
            setTotalCount(count);
            setItems(result);
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        data();

    }, [])

    return (
        <div className={styles.Sidebar}>
            <div>
             <h3 className={styles.Sidebar__Heading}>INVOICES - {totalCount}</h3>
             {items.map(item =>
                (<div key={item.id} className={styles.ItemContainer}>
                    <div className={styles.ItemContainer__Inner}>
                        <div className={styles.ItemContainer__Left}>
                            <p className={styles.ItemContainer__Left__Heading}>
                                INV. # - {item.id}
                            </p>
                            <p className={styles.ItemContainer__Left__Heading}>
                                Items - {item.items}
                            </p>
                            <p className={styles.ItemContainer__Left__Name}>
                                {item.name}
                            </p>
                        </div>
                        <div className={styles.ItemContainer__Right}>
                            <p>
                                {/* 11:35 AM - Today => ideally a timestamp */}
                                {item.timestamp}
                            </p>
                            <h1>
                                ₹{item.cost}
                            </h1>
                        </div>
                    </div>
              </div>
             ))}
            </div>
        </div>
    )
}

export default Sidebar
