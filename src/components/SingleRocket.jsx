import PropTypes from 'prop-types';

const SingleRocket = ({ description, rocketName, flickrImages }) => (
  <div className="border h-auto flex justify-start items-start mb-[2.5rem] gap-x-[1.5rem]">
    <img src={flickrImages} className="w-[300px]" alt="rocket" />
    <div className="py-4">
      <h1 className="text-xl font-medium">{rocketName}</h1>
      <p className="text-base mt-2">{description}</p>
      <button
        type="button"
        className="text-white bg-blue-600 cursor-pointer mt-3 rounded px-[1rem] py-2"
      >
        Reserve rocket
      </button>
    </div>
  </div>
);
export default SingleRocket;

SingleRocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};
