import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.button__list}>
    {options.map(option => (
      <button
        className={css.button}
        name={option}
        key={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option[0].toUpperCase() + option.substring(1)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
