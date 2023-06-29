import PropTypes from 'prop-types';
import ReserveRocketButton from './ReserveRocketButton';

const SingleRocket = ({
  id,
  description,
  rocketName,
  flickrImages,
  reserved,
}) => (
  <div className="h-auto flex justify-start items-start mb-[2.5rem] gap-x-[1.5rem]">
    <img src={flickrImages} className="w-[300px]" alt="rocket" />
    <div className="py-2">
      <h1 className="text-xl font-semibold">{rocketName}</h1>
      <p className="text-base mt-2">{description}</p>
      <ReserveRocketButton id={id} reserved={reserved} />
    </div>
  </div>
);
export default SingleRocket;

SingleRocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

SingleRocket.defaultProps = {
  reserved: false,
};
