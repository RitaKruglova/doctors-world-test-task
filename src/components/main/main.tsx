import { FC } from 'react';
import mainStyles from './main.module.css';
import Myths from '../myths/myths';
import Therapy from '../therapy/therapy';

const Main: FC = () => {
  return (
    <main className={mainStyles.container} >
      <Myths />
      <Therapy />
    </main>
  )
}

export default Main;