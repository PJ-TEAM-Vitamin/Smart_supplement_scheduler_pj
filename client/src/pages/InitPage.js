import React from 'react';
import MedicationInput from '../components/InitPage/MedicationInput';

const InitPage = () => {
  return (
    <>
      <MedicationInput title={'복용중인 약'} />
      <MedicationInput title={'복용불가 약'} />
    </>
  );
};

export default InitPage;
