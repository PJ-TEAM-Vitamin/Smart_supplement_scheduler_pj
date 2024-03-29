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
  input {
    cursor: pointer;
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

export const MoveButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
  color: #fff;
  cursor: pointer;
  width: 100px;
  height: 40px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  background-color: #82aae3;
  border-radius: 10px;
`;

export const Alarm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .clock {
    width: 200px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
export const SelectTimeForm = styled.form`
  .timeInput {
    button {
      cursor: pointer;
    }
  }
`;
export const TimeInputItem = styled.div`
  .timeLabel {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  input {
    width: 200px;
    height: 30px;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;
export const TumblerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Tumbler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  background-color: #fff;
  height: 400px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 30px;
  .left {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70%;
    }
  }
  .right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .info {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 80%;
      .title {
        font-weight: bold;
        font-size: 1.2rem;
        color: #ff6969;
      }
      p {
        font-size: 0.8rem;
        color: #ffabab;
      }
      button {
        border: none;
        width: 80px;
        height: 40px;
        border-radius: 20px;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: #fa9884;
        cursor: pointer;
        margin-right: 5px;
        margin-left: 5px;
      }
    }
    .weight {
      background-color: #ffebeb;
      border-radius: 10px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      height: 30px;
      width: 200px;
      margin-top: 5px;
      margin-bottom: 5px;
      input {
        margin-left: 20px;
        margin-right: 4px;
        width: 20%;
        border: none;
        border-bottom: 1px solid gray;
      }
    }
  }
`;

export const InitCommonHeader = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  margin-right: 20px;
`;

export const AlarmListContainer = styled.div`
  min-height: 100px;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const AlarmListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 25%;
    text-align: center;
  }
`;

export const SelectMedicineDisplay = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .box {
    margin-top: 10px;
    width: 90%;
    background-color: #fff;
    min-height: 150px;
    border-radius: 15px;
  }
`;

export const SearchMedicineDisplay = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .searchBar {
    margin-top: 10px;
    width: 90%;
    display: flex;
    input {
      width: 80%;
      height: 25px;
      border: none;
      border-bottom: 2px solid #6096b4;
      border-top: 2px solid #6096b4;
    }
    button {
      border: none;
      width: 20%;
      background-color: #6096b4;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
    }
  }
  .searchListContainer {
    background-color: #fff;
    width: 90%;
    min-height: 150px;
    overflow: hidden;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 60px;
    background-color: #ff6969;
    color: #fff;
    font-weight: 600;
    width: 100px;
    height: 25px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

export const TempStoreList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  .item {
    width: 30%;
  }
  button {
    border: none;
    background-color: #ff6d60;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 7px;
    cursor: pointer;
  }
`;
export const SearchItemList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  .item {
    width: 40%;
  }
  .company {
    width: 40%;
  }
  button {
    border: none;
    background-color: #6da9e4;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 7px;
    cursor: pointer;
  }
`;

export const AddButton = styled.button`
  width: 70px;
  height: 30px;
  color: #fffaf4;
  font-weight: bold;
  background-color: #fea1a1;
  border: none;
  border-radius: 10px;
`;
