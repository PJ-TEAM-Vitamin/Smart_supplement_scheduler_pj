import React from 'react';
import MedicationInput from '../components/MedicationInput';

const LandingPage = () => {
  return (
    <div>
      <MedicationInput title={'복용중인 약'}/>
      <MedicationInput title={'복용불가 약'}/>
    </div>
  );
};

export default LandingPage;
