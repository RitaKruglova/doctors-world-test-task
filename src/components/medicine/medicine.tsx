import { FC } from 'react';
import medicineStyles from './medicine.module.css';

interface IMedicineProps {
  iconPath: string;
  title: string;
  text: string;
}

const Medicine: FC<IMedicineProps> = ({ iconPath, title, text }) => {
  return (
    <li className={medicineStyles.container} >
      <img className={medicineStyles.image} src={iconPath} alt="Иконка" />
      <h6 className={medicineStyles.title} >{title}</h6>
      <p className={medicineStyles.text} >{text}</p>
    </li>
  )
}

export default Medicine;