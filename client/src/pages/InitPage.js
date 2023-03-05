import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

import {SmartDispatchContext} from "../index";
import MedicationInput from "../components/InitPage/MedicationInput";

const InitPageContainer = styled.div`
  background-color: #FFFFF0;
`;

const EnterInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
`;

const InfoLeft = styled.div`
  width: 400px;
  height: 630px;
  background-color: #eddbc7;
  border-radius: 10px;
  margin: 15px;
  padding: 20px;

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const EnterName = styled.div`
  input {
    width: 80%;
    height: 30px;
    border: none;
    border-radius: 10px;
    border-bottom: 1px solid #b99b6b;
  }
  
  margin-bottom: 150px;
`;

const GenderCheck = styled.div`
  label {
    font-size: 20px;
    margin-left: 10px;
  }
  
  margin-bottom: 150px;
`;


const EnterAge = styled.div`
  input {
    width: 80%;
    height: 30px;
    border: none;
    border-radius: 10px;
    border-bottom: 1px solid #b99b6b;
  }
`;

const Submit = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  button {
    width: 100px;
    height: 40px;

    font-size: 1rem;
    font-weight: 600;
    border: none;
    background-color: #eddbc7;
    border-radius: 10px;
  }
`;

const InitPage = () => {
   const [state, setState] = useState({
      name: "",
      gender: "",
      age: "",
   });

   const navigate = useNavigate();
   const {onCreate} = useContext(SmartDispatchContext);

   const onClickJoin = () => {
      onCreate(state.name, state.gender, state.age);
      console.log(state);

      navigate('/');
   };

   const handleChangeState = (e) => {
      setState({
         ...state,
         [e.target.name]: e.target.value
      });
      console.log(e.target.value);
   };

   const onChangeInfo = (e) => {
      //값이 숫자인지 검사하는 정규식
      const regex = /^[0-9]+$/;
      if (regex.test(e.target.value)) {
         setState({
            ...state,
            [e.target.name]: e.target.value
         });
      }
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
                     name="name"
                     placeholder="이름을 입력해주세요"
                  />
               </EnterName>
               <GenderCheck>
                  <div className='title'>{'성별'}</div>
                  <label>남자</label>
                  <input
                     type="radio"
                     name="gender"
                     value="male"
                     onChange={handleChangeState}
                  />
                  <label>여자</label>
                  <input
                     type="radio"
                     name="gender"
                     value="female"
                     onChange={handleChangeState}
                  />
               </GenderCheck>
               <EnterAge>
                  <div className='title'>{'나이'}</div>
                  <input
                     value={state.age}
                     onChange={onChangeInfo}
                     name="age"
                     placeholder="나이를 입력해주세요"
                  />
               </EnterAge>
            </InfoLeft>
            <div className="right">
               <MedicationInput title={'복용중인 약'}/>
               <MedicationInput title={'복용불가 약'}/>
            </div>
         </EnterInfo>

         <Submit>
            <button onClick={onClickJoin}>회원 가입</button>
         </Submit>

      </InitPageContainer>
   );
};

export default InitPage;
