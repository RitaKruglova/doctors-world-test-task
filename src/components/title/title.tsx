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
      {isMythsPlace
        ?
          <h1 className={titleStyles.title} >{text}</h1>
        :
          <h2 className={titleStyles.title} >{text}</h2>
      }
    </>
  )
}

export default Title;