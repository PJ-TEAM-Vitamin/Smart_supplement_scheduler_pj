import React, { useState, useCallback, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InitPage1 from '../../components/InitPage/InitPage1';
import InitPage2 from '../../components/InitPage/InitPage2';
import InitPage3 from '../../components/InitPage/InitPage3';
import InitPage4 from '../../components/InitPage/InitPage4';
import { SIGN_UP_REQUEST } from '../../reducers/user';
import { Header } from './InitPageStyles';

const InitPage = () => {
  const { signUpDone } = useSelector(state => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: '', // 사용자 이름
    gender: '', // 사용자 성별
    age: '', // 사용자 나이
    able: [], // 복용 약
    unable: [], // 복용 불가 약
    time: [], // 알람시간
    tumbler: 0, // 텀블러 무게
    capacity: 0, // 텀블러 용량
  });

  const onClickSignUp = useCallback(() => {
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
    },
    [state],
  );

  // 회원가입 성공시 부트 페이지로 이동
  useEffect(() => {
    if (signUpDone) {
      navigate('/');
    }
  }, [signUpDone, navigate]);

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
    </>
  );
};

export default InitPage;
