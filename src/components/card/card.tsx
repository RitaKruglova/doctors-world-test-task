import { FC } from 'react';
import cardStyles from './card.module.css';

interface ICardProps {
  imagePath: string;
  title: string;
  subtitle: string;
  boldPart: string;
  text: string;
}

const Card: FC<ICardProps> = ({ imagePath, title, subtitle, boldPart, text }) => {
  const endsWithFootnote = subtitle.endsWith('1');
  const subtitleWithoutFootnote = endsWithFootnote ? subtitle.slice(0, -1) : subtitle;
  const parts = subtitleWithoutFootnote.split(boldPart);

  return (
    <li className={cardStyles.container} >
      <img className={cardStyles.image} src={imagePath} alt="Иконка" />
      <h5 className={cardStyles.title} >{title}</h5>
      <h6 className={cardStyles.subtitle} >
        {parts[0]}
        <span className={cardStyles.bold} >{` ${boldPart}`}</span>
        {parts[1]}{endsWithFootnote && <sup>1</sup>}
      </h6>
      <p className={cardStyles.text} >{text}</p>
    </li>
  )
}

export default Card;