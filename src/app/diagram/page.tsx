import { FC } from "react";
import diagramStyles from './page.module.css';

const Diagram: FC = () => {
  return (
    <section className={diagramStyles.container} >
      <h3 className={diagramStyles.text} >В десятилетнем исследовании <span className={diagramStyles.bold} >«Генетическая эпидемиология ХОБЛ» (COPDGene)</span> среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено <span className={diagramStyles.bold} >преобладание женщин (66%),</span> а в возрасте 60-64 лет количество женщин и мужчин.</h3>
      <p className={diagramStyles.text} >Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более <span className={diagramStyles.bold} >высокий процент площади стенок,</span> но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.</p>
      <img className={diagramStyles.image} src="/images/diagram.svg" alt="Диаграмма" />
    </section>
  )
}

export default Diagram;