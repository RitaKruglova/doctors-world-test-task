import { FC } from 'react';
import medicineStyles from './medicine.module.css';

interface IMedicineProps {
  iconPath: string;
  beforeBold: string;
  boldPart: string;
  afterBold: string;
  text: string;
}

const Medicine: FC<IMedicineProps> = ({ iconPath, beforeBold, boldPart, afterBold, text }) => {
  return (
    <li className={medicineStyles.container} >
      <img className={medicineStyles.image} src={iconPath} alt="Иконка" />
      <h6 className={medicineStyles.title} >
        {beforeBold}
          <span className={medicineStyles.bold} >{boldPart}</span>
        {afterBold}
      </h6>
      <p className={medicineStyles.text} >{text}</p>
    </li>
  )
}

export default Medicine;