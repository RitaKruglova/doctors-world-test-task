import { FC } from 'react';
import mainStyles from './main.module.css';
import Myths from '../myths/myths';

const Main: FC = () => {
  return (
    <main className={mainStyles.container} >
      <Myths />
    </main>
  )
}

export default Main;