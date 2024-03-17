import { FC } from 'react';
import therapyStyles from './therapy.module.css';
import Title from '../title/title';

const Therapy: FC = () => {
  return (
    <section className={therapyStyles.container} >
      <Title text="Терапия ХОБЛ: что в фокусе?" isMythsPlace={false} />
      <div className={therapyStyles.background} >
        <h4 className={therapyStyles.subtitle} >Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</h4>
      </div>
      <h5 className={therapyStyles.caption} >Приоритетные направления фармакотерапевтической стратегии при ХОБЛ1:</h5>
    </section>
  )
}

export default Therapy;