import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const { missions } = useSelector((store) => store.missions);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const joinedMission = missions.filter((mission) => mission.reserved === true);

  return (
    <section className="px-[5rem] h-auto py-[2rem] font-manrope flex justify-between items-start gap-x-[3rem]">
      <div className="w-1/2 h-auto">
        <h2 className="text-3xl font-bold mb-3">My missions</h2>
        <ul className="border rounded-md list-none">
          {joinedMission.map((mission) => (
            <li
              className="pb-8 pt-4 pl-8 border-b font-normal"
              key={mission.mission_id}
            >
              {mission.mission_name}
            </li>
          ))}
        </ul>
        <div />
      </div>
      <div className="w-1/2 h-auto">
        <h2 className="text-3xl font-bold mb-3">My Rockets</h2>
        <ul className="border rounded-md list-none">
          {reservedRockets.map((rocket) => (
            <li className="pb-8 pt-4 pl-8 border-b font-normal" key={rocket.id}>
              {rocket.rocket_name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default MyProfile;
