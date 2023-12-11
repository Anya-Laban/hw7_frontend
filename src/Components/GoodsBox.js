import React from 'react'
import GoodsCard from './GoodsCard'
import watermelon from '../images/watermelon.svg'
import banana from '../images/banana.svg'
import cherry from '../images/cherry.svg'
import kiwi from '../images/kiwi.svg'
import pear from '../images/pear.svg'
import mango from '../images/mango.svg'

const GoodsBox = () => {
  const goods = [
    { id: 1, image: watermelon, name: 'Watermelon', price: 100 },
    { id: 2, image: banana, name: 'Banana', price: 70 },
    { id: 3, image: cherry, name: 'Cherry', price: 75 },
    { id: 4, image: kiwi, name: 'Kiwi', price: 170 },
    { id: 5, image: pear, name: 'Pear', price: 100 },
    { id: 6, image: mango, name: 'Mango', price: 160 },
  ]
  return (
    <>
      <h2>Картки товарів</h2>
      <div className="goods-box">
        {goods.map((good) => (
          <GoodsCard
            key={good.id}
            image={good.image}
            name={good.name}
            price={good.price}
          />
        ))}
      </div>
    </>
  )
}
export default GoodsBox
