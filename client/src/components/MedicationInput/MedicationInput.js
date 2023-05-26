import React, { useState, useCallback } from 'react';
import { DataWrapper, FixDataButton, InputContainer, InputForm, ItemWrapper } from './MedicationInputStyles';

const MedicationInput = ({ able, handleParamState, tempStore, setTempStore }) => {
  // const [tempStore, setTempStore] = useState([]);
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
  }, [able, count, medicine]);

  const onRemove = useCallback(
    i => {
      let temp = [...tempStore];
      setTempStore(temp.filter((v, index) => i !== index));
      if (able) {
        setCount(count - 1);
        console.log(count);
      }
    },
    [able, count, setTempStore, tempStore],
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
      <FixDataButton name="unable" onClick={e => handleParamState(e, tempStore)}>
        확정
      </FixDataButton>
    </InputContainer>
  );
};

export default MedicationInput;
