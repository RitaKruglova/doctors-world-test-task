import { FC } from 'react';
import mythStyles from './myth.module.css';
import Link from 'next/link';

interface IMythProps {
  buttonColor: string;
  svgIconPath: string;
  title: string;
  boldPart: string;
  text: string;
}

const Myth: FC<IMythProps> = ({ buttonColor, svgIconPath, title, boldPart, text }) => {
  return (
    <li className={`${mythStyles.container} ${buttonColor === 'green' ? mythStyles.high : ''}`} >
      <Link className={mythStyles.link} href={`${buttonColor === 'blue' ? '/diagram' : '/survival'}`} >
        <button type="button" className={`${mythStyles.button} ${buttonColor === 'blue' ? mythStyles.blue : mythStyles.green}`} />
      </Link>
      <img className={mythStyles.image} src={svgIconPath} alt="Иконка" />
      <div className={mythStyles.background} >
        <img className={mythStyles.circuit} src="/images/myth-image-2.svg" alt="Вектор" />
        <h3 className={mythStyles.title} >
          {title.split(boldPart)[0]}
          <span className={mythStyles.bold} >{boldPart}</span>
          {title.split(boldPart)[1]}
        </h3>
      </div>
      <p className={mythStyles.text} >{buttonColor === 'blue' ? text.substring(0, 152) + '…' : text.substring(0, 128) + '…'}</p>
    </li>
  )
}

export default Myth;