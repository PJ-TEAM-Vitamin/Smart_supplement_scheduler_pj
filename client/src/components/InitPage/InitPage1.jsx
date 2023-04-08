import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import MedicationInput from '../MedicationInput/MedicationInput';

//style
import {
  InitPageContainer,
  EnterInfo,
  InfoLeft,
  InfoRight,
  EnterName,
  GenderCheck,
  EnterAge,
  Alarm,
  Submit,
} from './styles';

const InitPage1 = ({ state, setState, handleChangeState }) => {
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

  const parent1 = useCallback(
    (x) => {
      console.log('p1 ' + x);
      state.able = x;
    },
    [state]
  );

  const parent2 = useCallback(
    (x) => {
      console.log('p2 ' + x);
      state.unable = x;
    },
    [state]
  );

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
        <InfoRight>
          <MedicationInput
            setState={setState}
            state={state}
            title={'복용불가 약'}
            able={false}
            parent={parent2}
            handleChangeState={handleChangeState}
          />
        </InfoRight>
      </EnterInfo>
      <Submit>
        <button>
          <Link to='/init/init2'>다음</Link>
        </button>
      </Submit>
    </InitPageContainer>
  );
};

export default InitPage1;
