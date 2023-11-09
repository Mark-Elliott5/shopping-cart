import starSVG from '../assets/star.svg';
import PropTypes from 'prop-types';

function StarMeter({ count, rate }) {
  return (
    <span className="rating-wrapper">
      {rate}
      {` `}
      <span className="star-meter" style={{ width: `calc((${rate}/5)*60px)` }}>
        <img src={starSVG} className="star" alt="star" />
        <img src={starSVG} className="star" alt="star" />
        <img src={starSVG} className="star" alt="star" />
        <img src={starSVG} className="star" alt="star" />
        <img src={starSVG} className="star" alt="star" />
      </span>
      {` `}({count})
    </span>
  );
}

StarMeter.propTypes = {
  count: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
};

export default StarMeter;
