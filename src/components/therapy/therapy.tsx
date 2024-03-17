import { FC } from 'react';
import therapyStyles from './therapy.module.css';
import Title from '../title/title';
import Medicine from '../medicine/medicine';

const Therapy: FC = () => {
  return (
    <section className={therapyStyles.container} >
      <Title text="Терапия ХОБЛ: что в фокусе?" isMythsPlace={false} />
      <div className={therapyStyles.background} >
        <h4 className={therapyStyles.subtitle} >Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</h4>
      </div>
      <h5 className={therapyStyles.caption} >Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:</h5>
      <ul className={therapyStyles.medicines} >
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
    </section>
  )
}

export default Therapy;