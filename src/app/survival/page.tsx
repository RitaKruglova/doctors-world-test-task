import { FC } from 'react';
import survivalStyles from './page.module.css';

const Survival: FC = () => {
  return (
    <div className={survivalStyles.container} >
      <h4 className={survivalStyles.subtitle} >Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов1.</h4>
      <p className={survivalStyles.text} >В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.2 Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.</p>
      <h3 className={survivalStyles.title} >Пятилетняя выживаемость пациентов</h3>
      <ul className={survivalStyles.cards} >

      </ul>
    </div>
  )
}

export default Survival;