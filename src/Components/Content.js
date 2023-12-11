import { Component } from 'react'
import Image from './Image'

class Content extends Component {
  render() {
    return (
      <div>
        <p>Дата та місце народження: 17 травня 2004 року, м.Городок</p>

        <p>Освіта:</p>
        <p>
          Ліцей №4 , м.Городок <br />
          НТУУ 'КПІ', м.Київ <br />
        </p>

        <p>Хобі:</p>
        <ul>
          <li>волейбол</li>
          <li>настільний теніс</li>
          <li>плавання</li>
        </ul>

        <p id="filmsTitle">Улюблені фільми:</p>
        <ol id="filmsList">
          <li>«Той, що біжить лабіринтом» Джеймс Дешнер</li>
          <li>«Голодні ігри» Сюзанна Коллінз</li>
          <li>«Дивергент» Вероніка Рот</li>
        </ol>

        <p>
          <b>Міла́н (італ. Milano, ломб. Milan, лат. Mediolanum)</b> — місто в
          північній Італії, адміністративний центр провінції Мілан у області
          Ломбардія. Мілан розміщений на висоті 122 м над рівнем моря у
          північно-західній частині Паданської рівнини між річками Тічино, Адда,
          По та горами Альпами на відстані близько 480 км на північний захід від
          Риму.
        </p>
        <Image />
        <div className="buttons">
          <button name="add">Додати</button>
          <button name="increase">Збільшити</button>
          <button name="reduce">Зменшити</button>
          <button name="remove">Видалити</button>
        </div>
      </div>
    )
  }
}

export default Content
