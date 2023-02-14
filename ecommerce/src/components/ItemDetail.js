import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ( item ) => {

    
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
    {id: 1, title: "Air max", price: 100, pictureUrl: "https://imgnike-a.akamaihd.net/1920x1920/011224IE.jpg", description: "Com suas linhas fáceis, o visual das pistas de herança e, claro, amortecimento Air visível, o Nike Air Max SC é a finalização perfeita para qualquer look. A rica mistura de materiais confere profundida, enquanto o transforma em um tênis durável e leve para uso no dia a dia."},
];

return (
    <>
    {items.map((item) => (
        <div className='card-details'>
            <div className='card-image'>
                <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div className='card-content'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p><b>Precio: ${item.price}</b></p>
                <ItemCount stock="5" initial="1" />
            </div>
        </div>
    ))}
    </>
);

}

export default ItemDetail;