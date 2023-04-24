import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const InitPageContainer = styled.div`
  background-color: #c9eeff;
  height: 80vh;
  overflow: scroll;
`;

export const EnterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoTop = styled.div`
  width: 92%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  .title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-right: 20px;
  }
`;

export const EnterName = styled.div`
  display: flex;
  margin-bottom: 10px;
  .item {
    width: 50%;
    display: flex;
  }
  input {
    width: 80%;
    height: 30px;
    border: none;
    border-radius: 10px;
    border-bottom: 1px solid #4e6e81;
  }
`;

export const GenderCheck = styled.div`
  display: flex;
  label {
    font-size: 20px;
    margin-left: 10px;
  }
`;

export const EnterAge = styled.div`
  display: flex;
  input {
    width: 30%;
    height: 30px;
    border: none;
    border-radius: 10px;
    border-bottom: 1px solid #b99b6b;
  }
`;

export const MoveButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    cursor: pointer;
    width: 100px;
    height: 40px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    background-color: #82aae3;
    border-radius: 10px;
  }
`;

export const Alarm = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;

  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const Tumbler = styled.div`
  align-items: center;
  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const InitCommonHeader = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  margin-right: 20px;
`;
