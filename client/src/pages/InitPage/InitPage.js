import React, {useCallback, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
// import { SIGN_UP_REQUEST } from '../../reducers/user';
// import {RESET_TUMBLR_REQUEST} from "../../reducers/data";

import MedicationInput from '../../components/InitPage/MedicationInput';

//style
import {
  InitPageContainer,
  EnterInfo,
  InfoLeft,
  EnterName,
  GenderCheck,
  EnterAge,
  Alarm,
  Tumbler,
  Submit,
} from './InitPageStyle';
import axios, {request} from "axios";




const InitPage = () => {
  const [state, setState] = useState({
     name: '',
     gender: '',
     age: '',
     able: [],
     unable: [],
     time1: '',
     time2: '',
     time3: '',
  });

  //텀블러
  const [weight, setWeight] = useState('');
  const dummy = {
     "tumbler" : {"weight": 600,},

  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickSignUp = useCallback(() => {
    console.log(state);
    navigate('/', { state: state });
  }, [state, dispatch]);

  const handleChangeState = useCallback((e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
     console.log(e.target.value);
  },[state]);

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

  const parent1 = useCallback((x)  => {
     state.able = x;
  }, [state.able]);

  const parent2 = useCallback((x) => {
     state.unable = x;
  },[state.unable]);

  //텀블러 무게 설정
  const setTumbler = () => {
     // 서버 통신하면 받아오는 코드?
     // axios
     //    .get('http://localhost:3000/init?')
     //    .then(result=> setWeight(result))
     //    .catch(error=> console.log('error', error));

     setWeight(dummy.tumbler.weight);
     console.log(weight);
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
          <MedicationInput title={'복용중인 약'} able={true} parent={parent1}/>
          <MedicationInput title={'복용불가 약'} able={false} parent={parent2}/>
        </div>
      </EnterInfo>
       {/*알람 설정*/}
       <Alarm>
          <div>
             <div className='title'>{'알람 설정'}</div>
             <form>
                <div className='input'>
                   <div>1번 약 <input type="time" name='time1' onChange={handleChangeState}/></div>
                   <div>2번 약 <input type="time" name='time2' onChange={handleChangeState}/></div>
                   <div>3번 약 <input type="time" name='time3' onChange={handleChangeState}/></div>
                </div>
             </form>
          </div>
       </Alarm>
       {/*텀블러 설정*/}
       <Tumbler>
          <div className='title'>{'텀블러 무게 설정'}</div>
          <div>{'무게: '+weight}</div>
          <div>
             <button onClick={setTumbler}>{'설정'}</button>
          </div>
       </Tumbler>
      <Submit>
        <button onClick={onClickSignUp}>회원 가입</button>
      </Submit>
    </InitPageContainer>
  );
};

export default InitPage;
