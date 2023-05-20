import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import water0 from '../../utils/img/water0.png';
import water30 from '../../utils/img/water30.png';
import water50 from '../../utils/img/water50.png';
import water70 from '../../utils/img/water70.png';
import water100 from '../../utils/img/water100.png';
import {
  UPDATE_TUMBLR_REQUEST,
} from '../../reducers/data';

const RecordToday = styled.div`
  width: 400px;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  color: #c9eeff;
  background-color: #62cdff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TumblrWrapper = styled.div`
  width: 90%;
  height: 77%;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TumblrItem = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const UpdateButton = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 20px;
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: 10px;
  cursor: pointer;
`;

const TumblrImg = styled.div`
  aspect-ratio: 1/1;
  width: 80%;
  background-size: cover;
  background-image: ${(props) => props.back};
`;

const Tumblr = ({ currentTime }) => {
  const dispatch = useDispatch();
  const { amountOfWater } = useSelector((state) => state.data);
  const [background, setBackgroud] = useState('');

  const onClickUpdate = useCallback(() => {
    // 업데이트 요청
    dispatch(UPDATE_TUMBLR_REQUEST());
  }, [dispatch]);

  // // 초기화
  // useEffect(() => {
  //   if (currentTime === '00:00:00') {
  //     // 초기화 요청
  //     dispatch(RESET_TUMBLR_REQUEST());
  //   }
  // }, [currentTime, dispatch]);

  // 마신 양에 따른 이미지 변화 _ 0 600 1000 1400 2000
  useEffect(() => {
    if (amountOfWater >= 0 && amountOfWater < 600) {
      setBackgroud(`url(${water0})`);
    } else if (amountOfWater >= 600 && amountOfWater < 1000) {
      setBackgroud(`url(${water30})`);
    } else if (amountOfWater >= 1000 && amountOfWater < 1400) {
      setBackgroud(`url(${water50})`);
    } else if (amountOfWater >= 1400 && amountOfWater < 2000) {
      setBackgroud(`url(${water70})`);
    } else if (amountOfWater >= 2000) {
      setBackgroud(`url(${water100})`);
    }
  }, [amountOfWater]);

  return (
    <TumblrWrapper>
      <TumblrItem>
        <RecordToday>{`오늘 하루 ${amountOfWater}ml 마셨습니다.`}</RecordToday>
        <TumblrImg back={background} />
        <UpdateButton onClick={onClickUpdate}>업데이트</UpdateButton>
      </TumblrItem>
    </TumblrWrapper>
  );
};

export default Tumblr;
