import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Clock from '../../components/LandingPage/Clock';
import dawn from '../../utils/img/dawn.jpg';
import morning from '../../utils/img/morning.jpg';
import afternoon from '../../utils/img/afternoon.jpg';
import evening from '../../utils/img/evening.jpg';
import night from '../../utils/img/night.jpg';
import Tumblr from '../../components/Water/Tumblr';
import RemainingDisplay from '../../components/RemainingDisplay/RemainingDisplay';
import Scheduler from '../../components/LandingPage/Scheduler';
import { CARTRIDGE_INFO_REQUEST } from '../../reducers/data';
/*
5~7: dawn
7~12: morning
12~18: afternoon
18~20: evening
20~5: night
*/
const LandingBackground = styled.div`
  aspect-ratio: 1920/1080;
  background: ${(props) => props.back};

  display: flex;
`;
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`;
const RightContent = styled.div`
  width: 60%;
`;
const MedicineContainer = styled.div`
  width: 95%;
  aspect-ratio: 300/100;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LandingPage = () => {
  const dispatch = useDispatch();
  const { cartridgeInfo } = useSelector((state) => state.data);
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const [background, setBackgroud] = useState('');

  // 랜딩시 알약 카트리지 정보 불러오기
  useEffect(() => {
    dispatch(CARTRIDGE_INFO_REQUEST());
  }, [dispatch]);

  // 시간 체크하여 배경화면 변경
  useEffect(() => {
    const date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 7) {
      setBackgroud(`url(${dawn})`);
    } else if (date.getHours() >= 7 && date.getHours() < 12) {
      setBackgroud(`url(${morning})`);
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
      setBackgroud(`url(${afternoon})`);
    } else if (date.getHours() >= 18 && date.getHours() < 20) {
      setBackgroud(`url(${evening})`);
    } else if (date.getHours() >= 20 || date.getHours() < 5) {
      setBackgroud(`url(${night})`);
    }
  }, [currentTime]);

  return (
    <LandingBackground back={background}>
      <LeftContent>
        <Clock currentTime={currentTime} setCurrentTime={setCurrentTime} />
        <Tumblr currentTime={currentTime} />
      </LeftContent>
      <RightContent>
        <Scheduler />
        <MedicineContainer>
          {cartridgeInfo?.map((v) => (
            <RemainingDisplay
              cartridgeNum={v.index}
              name={v.name}
              residual={v.residual}
            />
          ))}
        </MedicineContainer>
      </RightContent>
    </LandingBackground>
  );
};

export default LandingPage;
