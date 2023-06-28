import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';

const MissionsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div>
      <h1>Mission list</h1>
    </div>
  );
};

export default MissionsList;
