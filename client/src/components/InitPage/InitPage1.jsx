import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MedicationInput from '../MedicationInput/MedicationInput';

//style
import { InitPageContainer, EnterInfo, EnterName, GenderCheck, InitCommonHeader, MoveButton, InfoTop } from './InitComponentStyles';

const InitPage1 = ({ state, setState, handleChangeState, handleParamState }) => {
  const navigate = useNavigate();

  const [tempStore, setTempStore] = useState([]);

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

  const onClickSafe = () => {
    if (!state.name) {
      alert('이름을 입력하지 않았습니다.');
      return;
    }
    if (!state.gender) {
      alert('성별을 선택하지 않았습니다.');
      return;
    }
    if (!state.age) {
      alert('나이를 입력하지 않았습니다.');
      return;
    }
    if (state.unable.length !== tempStore.length) {
      alert('확정을 클릭하지 않았습니다.');
      return;
    }
    navigate('/init/init2');
  };

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
        <InitCommonHeader>복용불가 성분 입력하기</InitCommonHeader>
        <MedicationInput able={false} handleParamState={handleParamState} tempStore={tempStore} setTempStore={setTempStore} />
      </EnterInfo>
      <MoveButton onClick={onClickSafe}>다음</MoveButton>
    </InitPageContainer>
  );
};

export default InitPage1;
