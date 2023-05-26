import React, { useState, useEffect, useCallback } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import healthImg from '../../utils/img/health.png';
import goal from '../../utils/img/goal.png';
import going from '../../utils/img/going.png';
import water from '../../utils/img/single.png';
import { CalendarArea, GoalImg, HealthcareWrapper, HealthContent, HealthHeader, HealthInfo, HealthInfoArea, HealthView } from './healthcareStyles';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_HEALTH_INFO_REQUEST, CURRENT_MONTH_INDEX_REQUEST } from '../../reducers/data';

const HealthcarePage = () => {
  const { currentHealthInfo, currentMonthIndex } = useSelector(state => state.data);
  const dispatch = useDispatch();

  const [value, onChange] = useState(new Date());

  useEffect(() => {
    dispatch(
      CURRENT_HEALTH_INFO_REQUEST({
        date: moment().format('YYYY-MM-DD'),
      }),
    );
    dispatch(
      CURRENT_MONTH_INDEX_REQUEST({
        date: moment().format('YYYY-MM'),
      }),
    );
  }, [dispatch]);

  const handleChange = value => {
    onChange(value);
    dispatch(
      CURRENT_HEALTH_INFO_REQUEST({
        date: moment(value).format('YYYY-MM-DD'),
      }),
    );
  };

  return (
    <HealthcareWrapper>
      <HealthView>
        <HealthHeader>
          <div className="wrapper">
            <div className="header">당신의 건강 일지!</div>
            <div className="date">{moment(value).format('YYYY년 MM월 DD일')}</div>
          </div>
        </HealthHeader>
        <HealthContent>
          <CalendarArea>
            <Calendar
              className="calendar"
              onChange={handleChange}
              formatDay={(locale, date) => moment(date).format('DD')}
              value={value}
              tileContent={({ date, view }) => {
                if (currentMonthIndex?.find(x => x === moment(date).format('YYYY-MM-DD'))) {
                  return (
                    <>
                      <div>
                        <img style={{ width: '20px' }} src={healthImg} alt="health" />
                      </div>
                    </>
                  );
                }
              }}
            />
          </CalendarArea>
          <HealthInfoArea>
            <GoalImg>
              {currentHealthInfo?.water >= 2000 &&
              currentHealthInfo?.alarm.filter(a => a.type === true).length === currentHealthInfo?.alarm.length ? (
                <img className="goal" src={goal} alt="goal" />
              ) : (
                <img className="going" src={going} alt="going" />
              )}
            </GoalImg>
            <HealthInfo className="pill">
              {currentHealthInfo?.alarm?.filter(a => a.type === true)?.length === currentHealthInfo?.alarm?.length
                ? '모든 알림시간 마다 알약을 먹었습니다!'
                : '알약을 전부 챙겨 먹지 않았어요.'}
            </HealthInfo>
            <HealthInfo className="water">
              <img src={water} alt="water" />
              <div className="info">
                <div className="amount">
                  <div className="impact">{currentHealthInfo?.water}ml </div>
                  {'  만큼 마셨습니다.'}
                </div>
                <div className="result">{currentHealthInfo?.water >= 2000 ? '2L를 달성했어요!!' : '2L 달성을 하지 못했어요.'}</div>
              </div>
            </HealthInfo>
          </HealthInfoArea>
        </HealthContent>
      </HealthView>
    </HealthcareWrapper>
  );
};

export default HealthcarePage;
