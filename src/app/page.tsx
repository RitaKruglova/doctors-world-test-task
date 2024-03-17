import { FC } from 'react';
import pageStyles from './page.module.css';
import Header from '@/components/header/header';
import Main from '@/components/main/main';
import './globals.css';

const Home: FC = () => {
  return (
    <div className={pageStyles.page} >
      <Header />
      <Main />
    </div>
  )
}

export default Home;