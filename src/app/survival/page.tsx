import { FC } from 'react';
import survivalStyles from './page.module.css';
import Card from '@/components/card/card';

const Survival: FC = () => {
  return (
    <div className={survivalStyles.container} >
      <h4 className={survivalStyles.subtitle} >Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов<sup>1</sup>.</h4>
      <p className={survivalStyles.text} >В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.<sup>2</sup> Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.</p>
      <h3 className={survivalStyles.title} >Пятилетняя выживаемость пациентов</h3>
      <ul className={survivalStyles.list} >
        <Card
          imagePath="/images/survival-image-1.svg"
          title="45,5%"
          subtitle="пациентов с сердечной недостаточностью1"
          boldPart="сердечной недостаточностью1"
          text="Популяционное когортное исследование (N=385)"
        />
        <Card
          imagePath="/images/survival-image-2.svg"
          title="55,3%"
          subtitle="пациентов с инфарктом миокарда1"
          boldPart="инфарктом миокарда1"
          text="Апостериорный анализ когортного исследования (N=2887)"
        />
        <Card
          imagePath="/images/survival-image-3.svg"
          title="50,5%"
          subtitle="пациентов с раком мочевого пузыря"
          boldPart="раком мочевого пузыря"
          text="Исследование Национальной статистической службы (N=42642)"
        />
      </ul>
    </div>
  )
}

export default Survival;