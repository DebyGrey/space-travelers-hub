import PropTypes from 'prop-types';

const SingleRocket = ({ description, rocketName, flickrImages }) => (
  <div className="border flex justify-start items-start mb-[2rem]">
    <img src={flickrImages} className="w-[400px]" alt="rocket" />
    <div>
      <h1>{rocketName}</h1>
      <p>{description}</p>
      <button type="button">{flickrImages}</button>
    </div>
  </div>
);
export default SingleRocket;

SingleRocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};
