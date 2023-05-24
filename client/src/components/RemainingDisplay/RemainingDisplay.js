import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import medicine0 from '../../utils/img/medicine0.png';
import medicine30 from '../../utils/img/medicine30.png';
import medicine50 from '../../utils/img/medicine50.png';
import medicine70 from '../../utils/img/medicine70.png';
import medicine100 from '../../utils/img/medicine100.png';
import lens from '../../utils/img/lens.png';

const MedicineItem = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
`;
const MedicineImg = styled.div`
  aspect-ratio: 1/1;
  width: 80%;
  background-size: cover;
  background-image: ${props => props.back};
`;
const IndexCartridge = styled.div`
  font-weight: 800;
`;
const MediceineTitle = styled.div`
  display: flex;
`;
const MedicineName = styled.div`
  font-weight: 800;
`;

const PillLens = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  background-image: url(${lens});
  background-size: cover;
  cursor: pointer;
`;
/**
 * 알약이 담긴 카드리지 번호와 알약의 이름 및 잔량을 받아 화면에 표시한다.
 * @param {number} indexNum
 * @param {string} name
 * @param {number} residual
 * @returns
 */
const RemainingDisplay = ({ cartridgeNum, name, id, residual, handleInfo }) => {
  const [background, setBackgroud] = useState('');

  useEffect(() => {
    if (residual >= 0 && residual < 30) {
      setBackgroud(`url(${medicine0})`);
    } else if (residual >= 30 && residual < 50) {
      setBackgroud(`url(${medicine30})`);
    } else if (residual >= 50 && residual < 70) {
      setBackgroud(`url(${medicine50})`);
    } else if (residual >= 70 && residual < 100) {
      setBackgroud(`url(${medicine70})`);
    } else if (residual >= 100) {
      setBackgroud(`url(${medicine100})`);
    }
  }, [residual]);

  return (
    <MedicineItem>
      <IndexCartridge>{cartridgeNum}</IndexCartridge>
      <MedicineImg back={background} />
      <MediceineTitle>
        <MedicineName>{name}</MedicineName>
        <PillLens onClick={() => handleInfo(name, id)} />
      </MediceineTitle>
    </MedicineItem>
  );
};

export default RemainingDisplay;
