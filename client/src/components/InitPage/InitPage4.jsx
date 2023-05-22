import React, { useCallback, useState } from 'react';
import { InitCommonHeader, InitPageContainer, MoveButton, Tumbler, TumblerContainer } from './styles';
import TumbleImg from '../../utils/img/tumble.png';
import Loading from '../../utils/img/loading.gif';
import { useSelector } from 'react-redux';
import { SET_TUMBLER_REQUEST } from '../../reducers/user';

const InitPage4 = ({ state, handleParamState, onClickSignUp, handleChangeState, dispatch }) => {
  const { setTumbler, setTumblerLoading } = useSelector(state => state.user);
  const [tumblerCapacity, setTumblerCapacity] = useState(0);

  const handleChangeCapacity = useCallback(e => {
    setTumblerCapacity(e.target.value);
  }, []);

  const onClickSetTumbler = useCallback(() => {
    dispatch(SET_TUMBLER_REQUEST());
  }, [dispatch]);

  return (
    <InitPageContainer>
      <TumblerContainer>
        <InitCommonHeader style={{ marginRight: '0px', marginTop: '20px', marginBottom: '10px' }}>텀블러 무게를 측정해주세요</InitCommonHeader>
        <Tumbler>
          <div className="left">
            <img src={TumbleImg} alt="tumble" />
          </div>
          <div className="right">
            <div className="info">
              {setTumblerLoading ? (
                <img src={Loading} alt="loading" />
              ) : (
                <>
                  <div className="title">거치대 위에 텀블러를 올려주세요!</div>
                  <p>거치대 위에 올린 후 측정 버튼을 누르면 무게를 측정합니다.</p>
                  <div>
                    <button onClick={onClickSetTumbler}>{'측정'}</button>
                    {setTumbler > 0 && (
                      <button name="tumbler" onClick={e => handleParamState(e, setTumbler)}>
                        {'확정'}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
            <div className="weight">{'텀블러 무게: ' + setTumbler}</div>
            <div className="weight">
              {'텀블러 용량: '}
              <input type="text" name="capacity" value={state.capacity} onChange={handleChangeState} />
              {'ml'}
            </div>
          </div>
        </Tumbler>
        <MoveButton>
          <button onClick={onClickSignUp}>회원 가입</button>
        </MoveButton>
      </TumblerContainer>
    </InitPageContainer>
  );
};

export default InitPage4;
