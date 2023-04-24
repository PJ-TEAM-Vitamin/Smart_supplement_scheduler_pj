import React from 'react';
import { Link } from 'react-router-dom';
import { Alarm, InitPageContainer, MoveButton } from './styles';

const InitPage3 = ({ handleChangeState }) => {
  return (
    <InitPageContainer>
      <Alarm>
        <div>
          <div className="title">{'알람 설정'}</div>
          <form>
            <div className="input">
              <div>
                1번 약 <input type="time" name="time1" onChange={handleChangeState} />
              </div>
              <div>
                2번 약 <input type="time" name="time2" onChange={handleChangeState} />
              </div>
              <div>
                3번 약 <input type="time" name="time3" onChange={handleChangeState} />
              </div>
            </div>
          </form>
          <MoveButton>
            <button>
              <Link to="/init/init4" style={{ color: '#fff', textDecoration: 'none' }}>
                다음
              </Link>
            </button>
          </MoveButton>
        </div>
      </Alarm>
    </InitPageContainer>
  );
};

export default InitPage3;
