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

    const [item, setItem] = useState({});

    return (
        <div>
            <h1>{item.title}</h1>
            <img className={style.imgDetail} src={item.image} alt="" />
        </div>
    );
}

export default ItemDetail;