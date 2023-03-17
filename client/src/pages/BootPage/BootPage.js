import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MY_INFO_REQUEST } from '../../reducers/user';

export const SelectMyInfo = styled.div`
  background-color: #ffacac;
  width: 600px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  margin: 20px;
  cursor: pointer;
`;
export const MoveSignUp = styled.div`
  background-color: #ffebb4;
  width: 600px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  margin: 20px;
  cursor: pointer;
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
  return (
    <>
      <SelectMyInfo onClick={onClickStart}>
        기존에 등록된 유저로 시작
      </SelectMyInfo>
      <MoveSignUp onClick={onClickInit}>
        등록된 유저가 없으면 클릭 하세요!
      </MoveSignUp>
    </>
  );
};

export default BootPage;
