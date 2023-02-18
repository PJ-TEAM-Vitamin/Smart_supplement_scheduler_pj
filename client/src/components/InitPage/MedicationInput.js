import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 400px;
  height: 300px;

  background-color: #eddbc7;
  border-radius: 10px;

  margin: 15px;
  padding: 10px;
`;
const InputForm = styled.div`
  height: 85px;

  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .inputArea {
    display: flex;
    input {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      width: 80%;
      height: 30px;
      border: none;
      border-bottom: 1px solid #b99b6b;
    }
    button {
      width: 20%;
      border: none;
      border-bottom: 1px solid #b99b6b;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background-color: #6096b4;
      color: #fff;
      font-weight: 600;
    }
  }
`;
const DataWrapper = styled.div`
  width: 100%;
  height: 215px;
  overflow: scroll;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #fff;
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

const MedicationInput = ({ title }) => {
  const [tempStore, setTempStore] = useState([]);
  const [medicine, setMedicine] = useState('');

  const handleMedicine = useCallback((e) => {
    setMedicine(e.target.value);
  }, []);

  const onClickAdd = useCallback(() => {
    setTempStore((state) => [...state, medicine]);
    setMedicine('');
  }, [medicine]);

  const onRemove = useCallback(
    (i) => {
      let temp = [...tempStore];
      setTempStore(temp.filter((v, index) => i !== index));
    },
    [tempStore]
  );

  return (
    <InputContainer>
      <InputForm>
        <div className='title'>{title}</div>
        <div className='inputArea'>
          <input type='text' value={medicine} onChange={handleMedicine} />
          <button onClick={onClickAdd}>Add</button>
        </div>
      </InputForm>

      <DataWrapper>
        {tempStore.map((v, i) => (
          <ItemWrapper>
            <div className='itemName'>{v}</div>
            <button onClick={() => onRemove(i)}>delete</button>
          </ItemWrapper>
        ))}
      </DataWrapper>
    </InputContainer>
  );
};

export default MedicationInput;
