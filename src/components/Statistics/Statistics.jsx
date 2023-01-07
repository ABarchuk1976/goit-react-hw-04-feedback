import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const statisticsList = [
    { stat: good, title: 'Good' },
    { stat: neutral, title: 'Neutral' },
    { stat: bad, title: 'Bad' },
    { stat: total, title: 'Total feedbacks' },
    { stat: positivePercentage, title: 'Positive feedbacks' },
  ];

  return (
    <ul>
      {statisticsList.map(({ stat, title }) => (
        <li className={css.statistics__item} key={title}>
          {title}: {stat}
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
