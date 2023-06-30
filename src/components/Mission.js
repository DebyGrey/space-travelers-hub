import PropTypes from 'prop-types';
import classNames from 'classnames';

const Mission = ({ missionName, missionDescription, highlightRow }) => {
  const rowClasses = classNames('border pl-2', {
    'bg-gray-100': highlightRow,
  });
  return (
    <>
      <tr className={rowClasses}>
        <td className="border pl-5 pt-5 align-top">{missionName}</td>
        <td className="border p-5 text-justify">{missionDescription}</td>
        <td className="border pl-5">Not a Member</td>
        <td className="border pl-5" aria-hidden="true" />
      </tr>
    </>
  );
};

export default Mission;

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
  highlightRow: PropTypes.bool.isRequired,
};
