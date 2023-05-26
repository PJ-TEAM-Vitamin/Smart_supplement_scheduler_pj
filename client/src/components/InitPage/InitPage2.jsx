import React, { useState, useCallback, useRef } from 'react';
import {
  MoveButton,
  InitPageContainer,
  InitCommonHeader,
  SelectMedicineDisplay,
  TempStoreList,
  SearchMedicineDisplay,
  SearchItemList,
} from './InitComponentStyles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_PILL_REQUEST } from '../../reducers/data';

/**
 * 복용중인 약 등록 페이지
 */
const InitPage2 = ({ handleParamState }) => {
  const { searchPill, searchPillLoading } = useSelector(state => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const input = useRef(null);
  const [searchInput, setSearchInput] = useState('');
  const [tempStore, setTempStore] = useState([]);
  const [count, setCount] = useState(0);

  const onChangeSearchInput = useCallback(e => {
    setSearchInput(e.target.value);
  }, []);

  const onClickSearch = useCallback(async () => {
    dispatch(
      SEARCH_PILL_REQUEST({
        searchInput,
      }),
    );
  }, [searchInput]);
  /**
   * 리스트 아이템 추가
   */
  const addListItem = useCallback(
    value => {
      if (count >= 3) return null;
      setTempStore(state => [...state, value]);
      setCount(count + 1);
      console.log(tempStore);
      console.log(count);
      // 초기화
      setSearchInput('');
      input.current.focus();
    },
    [tempStore, count],
  );

  /**
   * 리스트 아이템 제거
   */
  const removeListItem = useCallback(
    i => () => {
      setTempStore(tempStore.filter(v => v !== tempStore[i]));
      setCount(count - 1);
    },
    [count, tempStore],
  );

  return (
    <InitPageContainer>
      <SelectMedicineDisplay>
        <InitCommonHeader>약물 목록</InitCommonHeader>
        <div className="box">
          {tempStore &&
            tempStore.map((v, i) => {
              return (
                <TempStoreList key={`${v.itemName}_${i}`}>
                  <div className="item">제품명: {v.itemName}</div>
                  <button onClick={removeListItem(i)}>취소</button>
                </TempStoreList>
              );
            })}
        </div>
      </SelectMedicineDisplay>
      <SearchMedicineDisplay>
        <InitCommonHeader>약물 검색</InitCommonHeader>
        <div className="searchBar">
          <input type="text" value={searchInput} ref={input} onChange={onChangeSearchInput}></input>
          <button onClick={onClickSearch}>검색</button>
        </div>
        <div className="searchListContainer">
          {searchPillLoading && <div className="loading">Loading...</div>}
          {searchPill?.map((v, i) => (
            <SearchItemList key={`${v?.itemName}_${i}`}>
              <div className="item">제품명: {v?.itemName}</div>
              <div className="company">제조사: {v?.entpName}</div>
              <button value={v} onClick={() => addListItem(v)}>
                선택
              </button>
            </SearchItemList>
          ))}
        </div>
      </SearchMedicineDisplay>
      <MoveButton
        name="able"
        onClick={e => {
          handleParamState(e, tempStore);
          navigate('/init/init3');
        }}
      >
        다음
      </MoveButton>
    </InitPageContainer>
  );
};

export default InitPage2;
