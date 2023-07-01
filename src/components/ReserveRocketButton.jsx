import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  reserveRocket,
  cancelReservation,
} from '../redux/rockets/rocketsSlice';

const ReserveRocketButton = ({ id, reserved }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    if (reserved) dispatch(reserveRocket(id));
    dispatch(cancelReservation(id));
  };

  return (
    <button
      type="button"
      className={`${
        reserved
          ? 'text-base bg-transparent border border-blue-500 text-blue-600 cursor-pointer mt-3 rounded-md px-[1.2rem] py-2 font-medium'
          : 'text-white text-base bg-blue-600 cursor-pointer mt-3 rounded px-[1.2rem] py-2 font-medium'
      }`}
      onClick={() => handleClick(id)}
    >
      {reserved ? 'Cancel reservation' : 'Reserve rocket'}
    </button>
  );
};

ReserveRocketButton.propTypes = {
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool,
};

ReserveRocketButton.defaultProps = {
  reserved: false,
};
export default ReserveRocketButton;
