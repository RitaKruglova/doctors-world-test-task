import { FC } from 'react';
import cardStyles from './card.module.css';

interface ICardProps {
  imagePath: string;
  title: string;
  subtitle: string;
  text: string;
}

const Card: FC<ICardProps> = ({ imagePath, title, subtitle, text }) => {
  return (
    <li className={cardStyles.container} >
      <img className={cardStyles.image} src={imagePath} alt="Иконка" />
      <h5 className={cardStyles.title} >{title}</h5>
      <h6 className={cardStyles.subtitle} >{subtitle}</h6>
      <p className={cardStyles.text} >{text}</p>
    </li>
  )
}

export default Card;