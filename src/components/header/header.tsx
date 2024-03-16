import { FC } from 'react';
import headerStyles from './header.module.css';

const Header: FC = () => {
  return (
    <header className={headerStyles.container} >
      <img className={headerStyles.a} src="/header-image-1.svg" alt="вектор"/>
      <img className={headerStyles.b} src="/header-image-2.svg" alt="вектор"/>
      <img className={headerStyles.c} src="/header-image-3.svg" alt="вектор"/>
    </header>
  )
}

export default Header;