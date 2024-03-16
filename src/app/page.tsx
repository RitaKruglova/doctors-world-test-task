import { FC } from 'react';
import pageStyles from './page.module.css';

const Home: FC = () => {
  return (
    <div className={pageStyles.page} >
      <header className={pageStyles.header} >
        <img className={pageStyles.a} src="/header-image-1.svg" alt="вектор"/>
        {/* <img className={pageStyles.b} src="/header-image-2.svg" alt="вектор"/>
        <img className={pageStyles.c} src="/header-image-3.svg" alt="вектор"/> */}
      </header>
    </div>
  )
}

export default Home;