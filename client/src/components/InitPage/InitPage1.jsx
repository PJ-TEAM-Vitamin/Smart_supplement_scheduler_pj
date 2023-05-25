import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import MedicationInput from '../MedicationInput/MedicationInput';

//style
import { InitPageContainer, EnterInfo, EnterName, GenderCheck, InitCommonHeader, MoveButton, InfoTop } from './InitComponentStyles';

const InitPage1 = ({ state, setState, handleChangeState, handleParamState }) => {
  const onChangeInfo = useCallback(
    e => {
      //값이 숫자인지 검사하는 정규식
      const regex = /^[0-9]+$/;
      if (regex.test(e.target.value)) {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
      }
    },
    [setState, state],
  );

  return (
    <InitPageContainer>
      <EnterInfo>
        <InfoTop>
          <EnterName>
            <div className="item">
              <div className="title">{'이름'}</div>
              <input value={state.name} onChange={handleChangeState} name="name" placeholder="이름을 입력해주세요" />
            </div>
            <div className="item">
              <div className="title">{'나이'}</div>
              <input value={state.age} onChange={onChangeInfo} name="age" placeholder="나이를 입력해주세요" />
            </div>
          </EnterName>
          <GenderCheck>
            <div className="title">{'성별'}</div>
            <label>남자</label>
            <input type="radio" name="gender" value="male" onChange={handleChangeState} />
            <label>여자</label>
            <input type="radio" name="gender" value="female" onChange={handleChangeState} />
          </GenderCheck>
        </InfoTop>
        <InitCommonHeader>복용불가 약 입력하기</InitCommonHeader>
        <MedicationInput able={false} handleParamState={handleParamState} />
      </EnterInfo>
      <MoveButton>
        <Link to="/init/init2" style={{ color: '#fff', textDecoration: 'none' }}>
          <button>다음</button>
        </Link>
      </MoveButton>
    </InitPageContainer>
  );
};

export default InitPage1;
