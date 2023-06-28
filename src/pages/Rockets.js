import { useSelector } from 'react-redux';
import SingleRocket from '../components/SingleRocket';

const Rockets = () => {
  const { rockets } = useSelector((store) => store.rockets);

  return (
    <div className="px-[5rem] py-[2rem] font-manrope">
      {rockets.map((rocket) => {
        const data = {
          id: rocket.id,
          rocketName: rocket.rocket_name,
          description: rocket.description,
          flickrImages: rocket.flickr_images[0],
        };
        return (
          <SingleRocket
            key={data.id}
            rocketName={data.rocketName}
            description={data.description}
            flickrImages={data.flickrImages}
          />
        );
      })}
    </div>
  );
};
export default Rockets;
