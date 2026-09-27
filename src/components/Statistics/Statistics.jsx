import css from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : null}

      <ul className={css.statList}>
        {stats.map((item) => {
          return (
            <li className={css.item} key={item.label}>
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Statistics;
