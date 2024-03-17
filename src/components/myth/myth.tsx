import { FC } from 'react';
import mythStyles from './myth.module.css';

interface IMythProps {
  buttonColor: string;
  svgIconPath: string;
  title: string;
  boldPart: string;
  text: string;
}

const Myth: FC<IMythProps> = ({ buttonColor, svgIconPath, title, boldPart, text }) => {
  return (
    <li className={mythStyles.container} >
      <button type="button" className={`${mythStyles.button} ${buttonColor === 'blue' ? mythStyles.blue : mythStyles.green}`} />
      <img className={mythStyles.image} src={svgIconPath} alt="Иконка" />
      <div className={mythStyles.background} >
        <img className={mythStyles.circuit} src="/images/myth-image-2.svg" alt="Вектор" />
        <h3 className={mythStyles.title} >
          {title.split(boldPart)[0]}
          <span className={mythStyles.bold} >{boldPart}</span>
          {title.split(boldPart)[1]}
        </h3>
      </div>
      <p className={mythStyles.text} >{text.substring(0, 152) + "…"}</p>
    </li>
  )
}

export default Myth;