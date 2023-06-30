import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';
import Mission from './Mission';

const MissionsList = () => {
  const { missions, isLoading } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div className="px-[5rem] py-[2rem] font-manrope">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <table className="border text-left">
          <thead className="h-16">
            <tr>
              <th className="border pl-5 w-1/6">Mission</th>
              <th className="border pl-5 w-3/6">Description</th>
              <th className="border pl-5 w-1/6">Status</th>
              <th className="border pl-5 w-1/6" aria-hidden="true" />
            </tr>
          </thead>
          <tbody>
            {missions.map((mission, index) => (
              <Mission
                key={mission.mission_id}
                missionName={mission.mission_name}
                missionDescription={mission.description}
                highlightRow={index % 2 === 1}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MissionsList;
