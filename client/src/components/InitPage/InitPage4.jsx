import React, { useState } from 'react';
import { Tumbler } from './styles';
import { Link } from 'react-router-dom';

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
  return (
    <Tumbler>
      <div className='title'>{'텀블러 무게 설정'}</div>
      <div>{'무게: ' + weight}</div>
      <div>
        <button onClick={setTumbler}>{'설정'}</button>
      </div>
      <button>
        <Link to='/init/init3'>이전</Link>
      </button>
      <button onClick={onClickSignUp}>회원 가입</button>
    </Tumbler>
  );
};

export default InitPage4;
