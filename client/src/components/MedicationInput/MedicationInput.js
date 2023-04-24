import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 92%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const InputForm = styled.div`
  .inputArea {
    display: flex;
    input {
      width: 80%;
      height: 30px;
      border: none;
      border-bottom: 1px solid #4e6e81;
    }
    button {
      width: 20%;
      border: none;
      border-bottom: 1px solid #4e6e81;
      border-top-right-radius: 10px;
      background-color: #6096b4;
      color: #fff;
      font-weight: 600;
      height: 33px;
    }
  }
`;
const FixDataButton = styled.button`
  width: 20%;
  height: 30px;
  border: none;
  border-top: 1px solid #4e6e81;
  border-bottom-left-radius: 10px;
  background-color: #6096b4;
  color: #fff;
  font-weight: 600;
`;
const DataWrapper = styled.div`
  width: 100%;
  height: 25vh;
  overflow: scroll;
  border-bottom: solid 1px #4e6e81;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemWrapper = styled.div`
  font-size: 1.3rem;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  background-color: #bdcdd6;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  .itemName {
    margin-left: 10px;
  }
  button {
    height: 100%;
    border: none;
    background-color: #aa5656;
    color: #fff;
    font-weight: 600;
  }
`;

const MedicationInput = ({ title, able, parent, setState, state, handleChangeState }) => {
  const [tempStore, setTempStore] = useState([]);
  const [medicine, setMedicine] = useState('');
  const [count, setCount] = useState(0);

  const handleMedicine = useCallback(e => {
    setMedicine(e.target.value);
  }, []);

  const onClickAdd = useCallback(() => {
    if (able) {
      if (count < 3) {
        setTempStore(state => [...state, medicine]);
        setMedicine('');
        setCount(count + 1);
        console.log(count);
      }
    } else {
      setTempStore(state => [...state, medicine]);
      setMedicine('');
    }
  }, [medicine, count]);

  const onRemove = useCallback(
    i => {
      let temp = [...tempStore];
      setTempStore(temp.filter((v, index) => i !== index));
      if (able) {
        setCount(count - 1);
        console.log(count);
      }
    },
    [tempStore, count],
  );

  return (
    <InputContainer>
      <InputForm>
        <div className="inputArea">
          <input type="text" value={medicine} onChange={handleMedicine} />
          <button onClick={onClickAdd}>Add</button>
        </div>
      </InputForm>
      <DataWrapper>
        {tempStore.map((v, i) => (
          <ItemWrapper>
            <div className="itemName">{v}</div>
            <button onClick={() => onRemove(i)}>delete</button>
          </ItemWrapper>
        ))}
      </DataWrapper>
      <FixDataButton name="unable" onClick={handleChangeState}>
        확정
      </FixDataButton>
    </InputContainer>
  );
};

export default MedicationInput;
