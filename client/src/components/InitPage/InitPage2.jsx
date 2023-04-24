import React, { useContext, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { MoveButton, InitPageContainer, InitCommonHeader } from './styles';

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

/**
 * 복용중인 약 등록 페이지
 * @param {*} param0
 * @returns
 */
const InitPage2 = ({ state }) => {
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
      console.log(request.data.body.items);
      if (request.data.body.items) {
        request.data.body.items.map(v => {
          setSearch(data => {
            return [...data, v];
          });
        });
      }
      // axios ...
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
      console.log('add: ', tempStore);
      setCount(count + 1);
      console.log(tempStore);
      console.log(count);
      // 초기화
      setSearch([]);
      setSearchInput('');
      // input.current.focus();
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
      console.log(tempStore[i]);
      console.log(tempStore);
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
              console.log(tempStore);
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
        <button>
          <Link to="/init/init3" style={{ color: '#fff', textDecoration: 'none' }}>
            다음
          </Link>
        </button>
      </MoveButton>
    </InitPageContainer>
  );
};

export default InitPage2;
