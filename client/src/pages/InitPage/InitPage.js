import React, { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { SmartDispatchContext } from '../../index';

import { useDispatch } from 'react-redux';
import { SIGN_UP_REQUEST } from '../../reducers/user';

import MedicationInput from '../../components/InitPage/MedicationInput';

//style
import {
  InitPageContainer,
  EnterInfo,
  InfoLeft,
  EnterName,
  GenderCheck,
  EnterAge,
  Submit,
} from './InitPageStyle';

const InitPage = () => {
  const [state, setState] = useState({
    name: '',
    gender: '',
    age: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const { onCreate } = useContext(SmartDispatchContext);

  const onClickSignUp = useCallback(() => {
    //  onCreate(state.name, state.gender, state.age);
    console.log(state);
    dispatch(SIGN_UP_REQUEST(state));
    //  navigate('/');
  }, [state, dispatch]);

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const onChangeInfo = (e) => {
    //값이 숫자인지 검사하는 정규식
    const regex = /^[0-9]+$/;
    if (regex.test(e.target.value)) {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <InitPageContainer>
      <EnterInfo>
        <InfoLeft>
          <EnterName>
            <div className='title'>{'이름'}</div>
            <input
              value={state.name}
              onChange={handleChangeState}
              name='name'
              placeholder='이름을 입력해주세요'
            />
          </EnterName>
          <GenderCheck>
            <div className='title'>{'성별'}</div>
            <label>남자</label>
            <input
              type='radio'
              name='gender'
              value='male'
              onChange={handleChangeState}
            />
            <label>여자</label>
            <input
              type='radio'
              name='gender'
              value='female'
              onChange={handleChangeState}
            />
          </GenderCheck>
          <EnterAge>
            <div className='title'>{'나이'}</div>
            <input
              value={state.age}
              onChange={onChangeInfo}
              name='age'
              placeholder='나이를 입력해주세요'
            />
          </EnterAge>
        </InfoLeft>
        <div className='right'>
          <MedicationInput title={'복용중인 약'} />
          <MedicationInput title={'복용불가 약'} />
        </div>
      </EnterInfo>

      <Submit>
        <button onClick={onClickSignUp}>회원 가입</button>
      </Submit>
    </InitPageContainer>
  );
};

export default InitPage;
