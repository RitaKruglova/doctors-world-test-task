import { FC } from 'react';
import arrowStyles from './arrow.module.css';

const Arrow: FC = () => {
  return (
    <li className={arrowStyles.container} >
      <img className={arrowStyles.arrow} src="/images/arrow-image.svg" alt="Стрелка" />
    </li>
  )
}

export default Arrow;