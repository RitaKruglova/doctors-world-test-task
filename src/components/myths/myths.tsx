import { FC } from 'react';
import mythsStyles from './myths.module.css';
import Myth from '../myth/myth';
import Title from '../title/title';

const Myths: FC = () => {
  return (
    <section className={mythsStyles.container} >
      <Title text="ХОБЛ: мифы и реальность" isMythsPlace={true} />
      <ul className={mythsStyles.list} >
        <Myth
          buttonColor="blue"
          svgIconPath="/images/myth-image-3.svg"
          title="ХОБЛ болеют преимущественно мужчины?"
          boldPart="преимущественно мужчины?"
          text="В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание женщин (66%), а в возрасте 60-64 лет количество женщин и мужчин."
        />
        <Myth
          buttonColor="green"
          svgIconPath="/images/myth-image-4.svg"
          title="Опасно не наличие заболевания, а обострения?"
          boldPart="Опасно"
          text="Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов."
        />
      </ul>
    </section>
  )
}

export default Myths;