import React, { useState, useEffect } from 'react';

const Item = ({ item }) => {

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(obj);
        }, 2000);
    });
}

useEffect(() => {
    getData().then((data) => {
        setItems(data);
    });
}, []);

const [items, setItems] = useState([]);

const obj = [
    {id: 1, title: "Air max", price: 100, pictureUrl: "https://imgnike-a.akamaihd.net/1920x1920/011224IE.jpg"},
    {id: 2, title: "Air jordan", price: 200, pictureUrl: "https://imgnike-a.akamaihd.net/1920x1920/023768P1.jpg"},
    {id: 3, title: "Air force", price: 300, pictureUrl: "https://imgnike-a.akamaihd.net/1920x1920/013886P1.jpg"}
];

return (
    <>
    {items.map((item) => (
        <div className='card col-3 m-1' key={item.id}>
            <h1>{item.title}</h1>
            
            <img src={item.pictureUrl} alt={item.title} />
            <h2>R$ {item.price}</h2>
        </div>
    ))}
    </>
);

}

export default Item;