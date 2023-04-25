import React from 'react';
import { Link } from 'react-router-dom';
import { Alarm, InitCommonHeader, InitPageContainer, MoveButton, SelectTimeForm, TimeInputItem } from './styles';
import Clock from '../../utils/img/clock.png';
const InitPage3 = ({ handleChangeState }) => {
  return (
    <InitPageContainer>
      <Alarm>
        <img className="clock" src={Clock} alt="clock" />
        <InitCommonHeader className="title" style={{ margin: '0px' }}>
          알림 시간을 설정하세요
        </InitCommonHeader>
        <SelectTimeForm>
          <div className="timeInput">
            <TimeInputItem>
              <div className="timeLabel">1번 약 </div>
              <input type="time" name="time1" onChange={handleChangeState} />
            </TimeInputItem>
            <TimeInputItem>
              <div className="timeLabel">2번 약</div>
              <input type="time" name="time2" onChange={handleChangeState} />
            </TimeInputItem>
            <TimeInputItem>
              <div className="timeLabel">3번 약</div>
              <input type="time" name="time3" onChange={handleChangeState} />
            </TimeInputItem>
          </div>
        </SelectTimeForm>
        <MoveButton>
          <button>
            <Link to="/init/init4" style={{ color: '#fff', textDecoration: 'none' }}>
              다음
            </Link>
          </button>
        </MoveButton>
      </Alarm>
    </InitPageContainer>
  );
};

export default InitPage3;
