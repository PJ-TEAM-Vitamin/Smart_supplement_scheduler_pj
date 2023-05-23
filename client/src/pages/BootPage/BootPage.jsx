import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { MY_INFO_REQUEST } from '../../reducers/user';

import back from '../../utils/img/bootBack1.jpg';
import logo from '../../utils/img/bootLogo.png';
export const BootBackground = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${back});
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const InfoWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SelectMyInfo = styled.div`
  width: 80%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const SelectInfo = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #00235b;
  margin-bottom: 10px;
`;
export const PillDisplay = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  overflow: hidden;
  margin-top: 10px;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  .left {
    width: 50%;
    height: 100%;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 5px;
  }
  .right {
    width: 50%;
    height: 100%;
    background-color: #ffacac;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 5px;
  }
`;
export const MoveSignUp = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 400;
  color: #666a73;
  cursor: pointer;
`;
export const BootInfo = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  img {
    width: 20%;
  }
  .info {
    h2 {
      color: #0a2647;
      font-size: 1.8rem;
    }
    p {
      color: #144272;
      font-size: 1.2rem;
    }
  }
`;

/**
 * 사이트 부팅시 초기화면
 * 등록된 유저가 있으면 기존 유저로 프로그램 진입 또는 새로운 유저로 재등록
 * 등록된 유저가 없으면 유저 등록 안내 _ initPage 이동
 * @returns
 */
const BootPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { myInfoDone, me } = useSelector(state => state.user);

  /**
   * 기존 유저정보를 통해 시작하기 위한 버튼
   * # 기존유저가 있는 경우
   * - 기존 유저 정보를 불러와서 store에 저장한 후 LandingPage로 이동
   * # 유저가 없는 경우
   * - 유저 정보를 불러오는 동작을 수행 후, 유저가 없으면 유저 등록이 필요하다는 alert 표시
   */
  const onClickStart = useCallback(() => {
    // 유저를 불러오는 동작 수행 _ 서버에서 정상적으로 유저를 불러왔을 경우 페이지 이동
    dispatch(MY_INFO_REQUEST());
  }, [dispatch]);

  // MoveSignUp 클릭시 회원등록 페이지로 이동
  const onClickInit = useCallback(() => {
    navigate('/init');
  }, [navigate]);

  // 정보를 모두 불러와야 페이지 이동
  useEffect(() => {
    if (myInfoDone && me) {
      navigate('/landing');
    }
  }, [me, myInfoDone, navigate]);

  return (
    <BootBackground>
      <BootInfo>
        <img src={logo} alt="logo" />
        <div className="info">
          <h2>Hello,</h2>
          <p>It's your SMART SUPPLEMENT SCHEDULER MACHINE!!</p>
        </div>
      </BootInfo>
      <InfoWrapper>
        <SelectMyInfo>
          <SelectInfo>등록된 사용자 정보가 있다면 버튼을 클릭하여 시작하세요</SelectInfo>
          <PillDisplay onClick={onClickStart}>
            <div className="left">Hello</div>
            <div className="right">Click Me</div>
          </PillDisplay>
        </SelectMyInfo>
        <MoveSignUp onClick={onClickInit}>▶ 등록된 유저가 없으면 클릭 하세요!</MoveSignUp>
      </InfoWrapper>
    </BootBackground>
  );
};

export default BootPage;
