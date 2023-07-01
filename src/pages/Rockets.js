import { useSelector } from 'react-redux';
import SingleRocket from '../components/SingleRocket';

const Rockets = () => {
  const { rockets, isLoading, isError } = useSelector((store) => store.rockets);

  if (isLoading && !isError) return <h1>Loading...</h1>;
  if (isError) return <h1>There was an error!</h1>;
  return (
    <div className="px-[5rem] py-[2rem] font-manrope">
      {rockets.map((rocket) => {
        const data = {
          id: rocket.id,
          rocketName: rocket.rocket_name,
          description: rocket.description,
          flickrImages: rocket.flickr_images[0],
          reserved: rocket.reserved,
        };
        return (
          <SingleRocket
            key={data.id}
            id={data.id}
            rocketName={data.rocketName}
            description={data.description}
            flickrImages={data.flickrImages}
            reserved={data.reserved}
          />
        );
      })}
    </div>
  );
};
export default Rockets;
