import { FC } from 'react';
import therapyStyles from './therapy.module.css';

const Therapy: FC = () => {
  return (
    <section className={therapyStyles.container} >
      <img className={therapyStyles.image} src="/images/myths-image-1.svg" alt="Вектор" />
      <h2 className={therapyStyles.title} >Терапия ХОБЛ: что в фокусе?</h2>
      <div className={therapyStyles.background} >
        <h4 className={therapyStyles.subtitle} >Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</h4>
      </div>
      <h5 className={therapyStyles.caption} >Приоритетные направления фармакотерапевтической стратегии при ХОБЛ1:</h5>
    </section>
  )
}

export default Therapy;