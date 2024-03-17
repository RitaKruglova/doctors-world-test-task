import { FC } from 'react';
import arrowsStyles from './arrows.module.css';
import Arrow from '../arrow/arrow';

const Arrows: FC = () => {
  return (
    <ul className={arrowsStyles.container} >
      <Arrow />
      <Arrow />
    </ul>
  )
}

export default Arrows;