import React from 'react'

const GoodsCard = (props) => {
  const { image, name, price } = props
  console.log(image)
  return (
    <div className="goods-card">
      <div className="goods-card__imageBox">
        <img src={image} alt={name} />
      </div>

      <h3>{name}</h3>
      <p>Ціна: {price}</p>
    </div>
  )
}
export default GoodsCard
