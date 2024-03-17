import { FC } from 'react';
import medicinesStyles from './medicines.module.css';
import Medicine from '../medicine/medicine';

const Medicines: FC = () => {
  return (
    <ul className={medicinesStyles.container} >
      <Medicine
        iconPath="/images/therapy-image-1.svg"
        beforeBold="Ингаляционный "
        boldPart="антихолинергик"
        afterBold=""
        text="Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов1"
      />
      <Medicine
        iconPath="/images/therapy-image-2.svg"
        beforeBold="Ингаляционный "
        boldPart="β2&#8209;агонист"
        afterBold=""
        text="Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции"
      />
      <Medicine
        iconPath="/images/therapy-image-3.svg"
        beforeBold="Ингаляционный "
        boldPart="глюкокортикостероид "
        afterBold="(ИГКС)"
        text="Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей"
      />
    </ul>
  )
}

export default Medicines;