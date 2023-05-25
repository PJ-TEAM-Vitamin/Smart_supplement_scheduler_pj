import React, { useContext, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  MoveButton,
  InitPageContainer,
  InitCommonHeader,
  SelectMedicineDisplay,
  TempStoreList,
  SearchMedicineDisplay,
  SearchItemList,
} from './InitComponentStyles';

/**
 * 복용중인 약 등록 페이지
 */
const InitPage2 = ({ handleParamState }) => {
  const input = useRef(null);
  const [search, setSearch] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [tempStore, setTempStore] = useState([]);
  const [count, setCount] = useState(0);

  const onChangeSearchInput = useCallback(e => {
    setSearchInput(e.target.value);
  }, []);

  /**
   * 공공데이터 포털에 데이터를 요청하고 저장
   */
  const onClickSearch = useCallback(async () => {
    try {
      const request = await axios.get(
        `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=${process.env.REACT_APP_IROS239_KEY}&itemName=${searchInput}&pageNo=1&startPage=1&numOfRows=3&type=json`,
      );
      if (request.data.body.items) {
        request.data.body.items.map(v => {
          setSearch(data => {
            return [...data, v];
          });
          return v;
        });
      }
    } catch (err) {
      console.dir(err);
    }
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
      setSearch([]);
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
          {search &&
            search?.map((v, i) => (
              <SearchItemList key={`${v.itemName}_${i}`}>
                <div className="item">제품명: {v.itemName}</div>
                <div className="company">제조사: {v.entpName}</div>
                <button value={v} onClick={() => addListItem(v)}>
                  선택
                </button>
              </SearchItemList>
            ))}
        </div>
      </SearchMedicineDisplay>
      <MoveButton>
        <Link to="/init/init3" style={{ color: '#fff', textDecoration: 'none' }}>
          <button name="able" onClick={e => handleParamState(e, tempStore)}>
            다음
          </button>
        </Link>
      </MoveButton>
    </InitPageContainer>
  );
};

export default InitPage2;
