import { FC } from 'react';
import mythsStyles from './myths.module.css';
import Myth from '../myth/myth';

const Myths: FC = () => {
  return (
    <section className={mythsStyles.container} >
      <img className={mythsStyles.image} src="/images/myths-image-1.svg" alt="Вектор" />
      <h1 className={mythsStyles.title} >ХОБЛ: мифы и реальность</h1>
      <ul className={mythsStyles.list} >
        <Myth
          buttonColor="blue"
          svgIconPath="/images/myth-image-3.svg"
          title="ХОБЛ болеют преимущественно мужчины?"
          boldPart="преимущественно мужчины?"
          text="В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание женщин (66%), а в возрасте 60-64 лет количество женщин и мужчин."
        />

      </ul>
    </section>
  )
}

export default Myths;