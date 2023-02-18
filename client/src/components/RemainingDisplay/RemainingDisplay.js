import React from 'react';
import styled from 'styled-components';

import medicine0 from '../../utils/img/medicine0.png';
import medicine30 from '../../utils/img/medicine30.png';
import medicine50 from '../../utils/img/medicine50.png';
import medicine70 from '../../utils/img/medicine70.png';
import medicine100 from '../../utils/img/medicine100.png';

const MedicineContainer = styled.div`
  width: 95%;
  aspect-ratio: 300/100;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MedicineItem = styled.div`
  width: 33%;
  img {
    width: 100%;
  }
`;
const RemainingDisplay = () => {
  return (
    <MedicineContainer>
      <MedicineItem>
        <img src={medicine0} alt='medicine' />
      </MedicineItem>
      <MedicineItem>
        <img src={medicine30} alt='medicine' />
      </MedicineItem>
      <MedicineItem>
        <img src={medicine70} alt='medicine' />
      </MedicineItem>
    </MedicineContainer>
  );
};

export default RemainingDisplay;
