import React, { useState } from 'react'

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial)
  

  const handleAdd = () => {
    if (count < stock) {
      setCount(Number(count) + 1)
    }
  }

  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div className="itemCount">
      <div className="itemCount__counter">
        <button onClick={handleRemove}>-</button>
        <span>{count}</span>
        <button onClick={handleAdd}>+</button><br/>
      </div>
      <button onClick={() => onAdd(count)}>Add to cart</button>
    </div>
  )
}

export default ItemCount