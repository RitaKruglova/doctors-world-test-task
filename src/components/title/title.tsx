import { FC } from 'react';
import titleStyles from './title.module.css';

interface ITitleProps {
  text: string;
  isMythsPlace: boolean;
}

const Title: FC<ITitleProps> = ({ text, isMythsPlace }) => {
  return (
    <>
      <img className={titleStyles.image} src="/images/title-image-1.svg" alt="Вектор" />
      <h2 className={`${titleStyles.title} ${isMythsPlace ? titleStyles.myths : ''}`} >{text}</h2>
    </>
  )
}

export default Title;