import React, {useState, useEffect} from 'react';
import style from './item.module.css'

function ItemDetail({match}) {

    useEffect( () => {
        fetchItem();
        console.log(match)
    }, []);

    const fetchItem = async () => {
        const fetchItem = await fetch (`https://fakestoreapi.com/products/${match.params.id}`);
        const item = await fetchItem.json();
        console.log(item);
        setItem(item);
    }

    const [item, setItem] = useState({
    });

    return (
        <div className={style.product}>
            <div className={style.image}>
                <img className={style.imgDetail} src={item.image} alt="" />    
            </div>
            <div className={style.description}>
                <div className={style.title}>
                    <h1>{item.title}</h1>
                </div>
                <div className={style.detail}>
                    <div className={style.price}>
                        <h2>Price: {item.price}$</h2>
                    </div>                    
                    <div>
                        <ul>
                            <li>Category: {item.category}</li>
                            <li>Description: {item.description}</li>
                        </ul>                        
                    </div>
                    <div className={style.button}>
                        Add to cart 
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ItemDetail;