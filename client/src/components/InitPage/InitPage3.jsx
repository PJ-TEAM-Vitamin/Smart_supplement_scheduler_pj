import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alarm, InitCommonHeader, InitPageContainer, MoveButton, SelectTimeForm, TimeInputItem, AlarmListContainer, AlarmListItem } from './styles';
import Clock from '../../utils/img/clock.png';

/**
 * 알람 시간 설정 페이지
 * @param handleChangeState
 * @returns {JSX.Element}
 * @constructor
 */
const InitPage3 = ({ state, handleParamState }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [checkedList, setCheckedList] = useState([]);

  const [tempAlarm, setTempAlarm] = useState([]); // 알람 시간 저장

  const checkCartridge = [];
  const maxCartridge = state?.able.length; //카트리지 선택 가능
  for (let i = 0; i < maxCartridge; i++) {
    checkCartridge.push(i + 1);
  }

  const handleChangeTime = useCallback(e => {
    setTime(e.target.value);
  });

  const handleChangeTitle = useCallback(e => {
    setTitle(e.target.value);
  }, []);

  const onCheckedElement = (checked, item) => {
    console.log(item);
    if (checked) {
      setCheckedList(state => [...state, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter(el => el !== item));
    }
    console.log(checkedList);
  };

  const onClickAddAlarm = value => {
    const alarmInfo = {
      title: title,
      time: time + ':00',
      cartridge: checkedList,
    };
    setTempAlarm(state => [...state, alarmInfo]);
    setTitle('');
    setTime('');
    setCheckedList([]);
    console.log(tempAlarm);
  };

  return (
    <InitPageContainer>
      <Alarm>
        <img className="clock" src={Clock} alt="clock" />
        <InitCommonHeader className="title" style={{ margin: '0px' }}>
          알림 시간을 설정하세요
        </InitCommonHeader>

        <SelectTimeForm>
          <div className="timeInput">
            <div className="timeLabel">알람 설정</div>
            <TimeInputItem>
              <input type="text" value={title} onChange={handleChangeTitle} />
              <input type="time" value={time} onChange={handleChangeTime} />
            </TimeInputItem>
            {checkCartridge.map(num => (
              <label>
                <input
                  className="cartridgeNum"
                  type="checkbox"
                  value={num}
                  onChange={e => {
                    onCheckedElement(e.target.checked, e.target.value);
                  }}
                  checked={checkedList.includes(num.toString())}
                />
                {`${num}번`}
              </label>
            ))}
            <button type="button" onClick={onClickAddAlarm}>
              추가
            </button>
          </div>
          <AlarmListContainer>
            {tempAlarm?.map(v => (
              <AlarmListItem>
                <div>{v.title}</div>
                <div>{v.cartridge.map(i => ` ${i} `)}</div>
                <div>{v.time}</div>
              </AlarmListItem>
            ))}
          </AlarmListContainer>
        </SelectTimeForm>
        <MoveButton>
          <Link to="/init/init4" style={{ color: '#fff', textDecoration: 'none' }}>
            <button name="time" onClick={e => handleParamState(e, tempAlarm)}>
              다음
            </button>
          </Link>
        </MoveButton>
      </Alarm>
    </InitPageContainer>
  );
};

export default InitPage3;
