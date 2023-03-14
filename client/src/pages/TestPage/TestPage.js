import React, { useState } from 'react';
import { currentTimer } from '../../components/LandingPage/Clock';
import { RECORD_OF_TIME_REQUEST } from '../../reducers/data';

import MedicineAlarm from '../../components/medicineAlarm';
const TestPage = () => {
  
  const [mdAlarm, setMdAlarm] = useState(false);
  const handleAlarm = () => {
    setMdAlarm(true);
  };
  return (
    <div>
      <button onClick={handleAlarm}>Alarm</button>
      {mdAlarm && <MedicineAlarm setMdAlarm={setMdAlarm} />}
    </div>
  );
};

export default TestPage;
