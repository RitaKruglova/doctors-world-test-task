import { FC } from 'react';
import mythsStyles from './myths.module.css';
import Myth from '../myth/myth';

const Myths: FC = () => {
  return (
    <section className={mythsStyles.container} >
      <img className={mythsStyles.image} src="/myths-image-1.svg" alt="вектор" />
      <h1 className={mythsStyles.title} >ХОБЛ: мифы и реальность</h1>
      <Myth />
    </section>
  )
}

export default Myths;