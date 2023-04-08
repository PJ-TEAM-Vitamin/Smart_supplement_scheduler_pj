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
  Alarm,
  Submit,
} from './InitPageStyle';

const InitPage = () => {
  const [state, setState] = useState({
     name: '',
     gender: '',
     age: '',
     able: [],
     unable: [],
     currentTime:'',
     alarmTime:'',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const { onCreate } = useContext(SmartDispatchContext);

  const onClickSignUp = useCallback(() => {
    //  onCreate(state.name, state.gender, state.age);
    console.log(state);
    navigate('/', { state: state });
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

   const checkAlarmClock= () => {
      if(this.state.alarmTime === 'undefined' || !this.state.alarmTime) {
         this.alarmMessage = "Please set your alarm.";
      } else {
         this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
         if(this.state.currentTime === this.state.alarmTime) {
            alert("its time!");
         } else {
            console.log("not yet");
         }
      }
   };

   const componentDidMount =() =>{
      this.clock = setInterval(
         () => this.setCurrentTime(),
         1000
      )
      this.interval = setInterval(
         () => this.checkAlarmClock(),
         1000)
   };

   const componentWillUnmount =() =>{
      clearInterval(this.clock);
      clearInterval(this.interval);
   };

   const setCurrentTime = ()=>{
      this.setState({
         currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
      });
   };

   const setAlarmTime = (e)=> {
      e.preventDefault();
      const inputAlarmTimeModified = e.target.value + ':00';
      this.setState({
         alarmTime: inputAlarmTimeModified
      });
   };

  const parent1 = useCallback((x)  => {
     console.log('p1 ' + x);
     state.able = x;
  }, [state.able]);

  const parent2 = useCallback((x) => {
     console.log('p2 ' + x);
     state.unable = x;
  },[state.unable]);

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
       <Alarm>
          <div>
             <h1>React Alarm Clock</h1>
             <h2>It is {state.currentTime}</h2>
             <form>
                <input type="time" onChange={setAlarmTime}></input>
             </form>
          </div>
       </Alarm>
      <Submit>
        <button onClick={onClickSignUp}>회원 가입</button>
      </Submit>
    </InitPageContainer>
  );
};

export default InitPage;
