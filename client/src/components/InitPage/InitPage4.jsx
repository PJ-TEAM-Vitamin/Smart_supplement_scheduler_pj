import React, { useState } from 'react';
import { InitCommonHeader, InitPageContainer, MoveButton, Tumbler, TumblerContainer } from './styles';
import TumbleImg from '../../utils/img/tumble.png';
import Loading from '../../utils/img/loading.gif';
const InitPage4 = ({ handleChangeState, onClickSignUp }) => {
  //텀블러
  const [weight, setWeight] = useState('');
  const dummy = {
    tumbler: { weight: 600 },
  };
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

  let measurement = false;
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
              {measurement ? (
                <img src={Loading} alt="loading" />
              ) : (
                <>
                  <div className="title">거치대 위에 텀블러를 올려주세요!</div>
                  <p>거치대 위에 올린 후 측정 버튼을 누르면 무게를 측정합니다.</p>
                  <button onClick={setTumbler}>{'측정'}</button>
                </>
              )}
            </div>
            <div className="weight">{'텀블러 무게: ' + weight}</div>
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
