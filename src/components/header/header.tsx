import { FC } from 'react';
import headerStyles from './header.module.css';

const Header: FC = () => {
  return (
    <header className={headerStyles.container} >
      <img className={headerStyles.a} src="/images/header-image-1.svg" alt="Вектор"/>
      <img className={headerStyles.b} src="/images/header-image-2.svg" alt="Вектор"/>
      <img className={headerStyles.c} src="/images/header-image-3.svg" alt="Вектор"/>
    </header>
  )
}

export default Header;