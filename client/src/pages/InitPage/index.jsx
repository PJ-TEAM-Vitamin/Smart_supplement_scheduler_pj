import React, { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import InitPage1 from '../../components/InitPage/InitPage1';
import InitPage2 from '../../components/InitPage/InitPage2';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InitPage3 from '../../components/InitPage/InitPage3';
import InitPage4 from '../../components/InitPage/InitPage4';

const InitPage = () => {
  const [state, setState] = useState({
    name: '', // 사용자 이름
    gender: '', // 사용자 성별
    age: '', // 사용자 나이
    able: [],
    unable: [],
    time1: '',
    time2: '',
    time3: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const { onCreate } = useContext(SmartDispatchContext);

  // 최종 회원등록이 될 버튼
  const onClickSignUp = useCallback(() => {
    //  onCreate(state.name, state.gender, state.age);
    console.log(state);
    // navigate('/', { state: state });
  }, [state, dispatch]);

  /**
   * 인풋 데이터 set
   * @param {*} e
   */
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  // Route를 이용하여 화면 전환
  return (
    <>
      <h2>회원등록</h2>
      <Routes>
        <Route
          path='/'
          element={
            <InitPage1
              state={state}
              setState={setState}
              handleChangeState={handleChangeState}
            />
          }
        />
        <Route
          path='init2'
          element={
            <InitPage2
              state={state}
              setState={setState}
              handleChangeState={handleChangeState}
            />
          }
        />
        <Route
          path='init3'
          element={<InitPage3 handleChangeState={handleChangeState} />}
        />
        <Route
          path='init4'
          element={
            <InitPage4
              handleChangeState={handleChangeState}
              onClickSignUp={onClickSignUp}
            />
          }
        />
      </Routes>
      <button onClick={onClickSignUp}>회원 가입</button>
    </>
  );
};

export default InitPage;
