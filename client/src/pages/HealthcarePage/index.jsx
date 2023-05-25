import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import moment from 'moment';

export const HealthcareWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CalendarArea = styled.div`
  width: 50%;
`;
export const HealthInfoArea = styled.div`
  width: 50%;
`;

const mark = ['2023-05-10', '2023-05-13', '2023-05-15']; // 더미

const HealthcarePage = () => {
  const [value, onChange] = useState(new Date());

  // useEffect : 해당 날짜의 마신 물의 양과, 약 먹은 횟수 불러오기
  // water -> amount_of_water _ UserId, createdAt
  // intake, alarm ->  [알람 title = true....]
  // 해당 월의 intake, water 날짜 정보가져오기 _ ['2023-05-10', '2023-05-13', '2023-05-15']

  // 날짜 클릭시
  // 해당 날짜에 닷이 있다면? dispatch -> 해당 날짜의 마신 물의양, 약 먹은 횟수 불러오기
  const onCLick = () => {
    console.log(value);
    console.log(moment(value).format('YYYY-MM-DD'));
  };
  return (
    <HealthcareWrapper>
      <CalendarArea>
        <Calendar
          onChange={onChange}
          onClickDay={onCLick}
          formatDay={(locale, date) => moment(date).format('DD')}
          value={value}
          tileContent={({ date, view }) => {
            if (mark.find(x => x === moment(date).format('YYYY-MM-DD'))) {
              return (
                <>
                  <div>
                    <div className="dot">O</div>
                  </div>
                </>
              );
            }
          }}
        />
      </CalendarArea>
      <HealthInfoArea>{moment(value).format('YYYY년 MM월 DD일')}</HealthInfoArea>
    </HealthcareWrapper>
  );
};

export default HealthcarePage;
