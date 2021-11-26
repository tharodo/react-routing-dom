import React from 'react';
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Shop() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
        <div>
            {items.map(item => (
                <div key={item.id}>
                    <h3>
                        {item.title}
                    </h3>                    
                </div>
                
            ))}            
        </div>
    );
}

export default Shop;