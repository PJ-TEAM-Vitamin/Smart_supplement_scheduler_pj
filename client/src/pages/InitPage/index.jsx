import React, { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InitPage1 from '../../components/InitPage/InitPage1';
import InitPage2 from '../../components/InitPage/InitPage2';
import InitPage3 from '../../components/InitPage/InitPage3';
import InitPage4 from '../../components/InitPage/InitPage4';
import styled from 'styled-components';
import { SIGN_UP_REQUEST } from '../../reducers/user';

const Header = styled.div`
  height: 10vh;
  width: 150px;
  background-color: #2c74b3;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 10px;
`;
const InitPage = () => {
  const [state, setState] = useState({
    name: '', // 사용자 이름
    gender: '', // 사용자 성별
    age: '', // 사용자 나이
    able: [], // 복용 약
    unable: [], // 복용 불가 약
    time: [],
    tumbler: 0,
    capacity: 0,
  });
  const dispatch = useDispatch();

  const onClickSignUp = useCallback(() => {
    console.log(state);
    dispatch(
      SIGN_UP_REQUEST({
        ...state,
      }),
    );
  }, [state, dispatch]);

  const handleChangeState = useCallback(
    e => {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    },
    [state],
  );
  const handleParamState = useCallback(
    (e, value) => {
      setState({
        ...state,
        [e.target.name]: value,
      });
      console.log('click handleParam: ');
      console.dir(state);
    },
    [state],
  );

  // Route 이용하여 화면 전환
  return (
    <>
      <Header>회원등록</Header>
      <Routes>
        <Route
          path="/"
          element={<InitPage1 state={state} setState={setState} handleChangeState={handleChangeState} handleParamState={handleParamState} />}
        />
        <Route path="init2" element={<InitPage2 state={state} setState={setState} handleParamState={handleParamState} />} />
        <Route path="init3" element={<InitPage3 state={state} handleParamState={handleParamState} />} />
        <Route
          path="init4"
          element={
            <InitPage4
              state={state}
              handleParamState={handleParamState}
              handleChangeState={handleChangeState}
              onClickSignUp={onClickSignUp}
              dispatch={dispatch}
            />
          }
        />
      </Routes>
      <button onClick={onClickSignUp}>회원 가입</button>
    </>
  );
};

export default InitPage;
