import { FC } from 'react';
import recommendationStyles from './recommendation.module.css';

interface IRecommendationProps {
  text: string;
}

const Recommendation: FC<IRecommendationProps> = ({ text }) => {
  return (
    <li className={recommendationStyles.container} >
      <p className={recommendationStyles.text} >{text}<sup>1</sup>.</p>
    </li>
  )
}

export default Recommendation;