import React from 'react';
import styled from 'styled-components';
const SchedulerWrapper = styled.div`
  width: 95%;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  aspect-ratio: 300/150;
  margin-top: 20px;
  margin-bottom: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .dummy {
    display: flex;
    align-items: center;
    border-radius: 10px;
    width: 80%;
    height: 40px;
    background-color: #f4d9e7;
    margin-top: 10px;
  }
  .time {
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 10px;
  }
  .item {
    margin-left: 10px;
  }
`;
const Scheduler = () => {
  return (
    <SchedulerWrapper>
      <div className='dummy'>
        <div className='time'>07:00:00</div>
        <div className='item'>종합비타민</div>
      </div>
      <div className='dummy'>
        <div className='time'>07:00:00</div>
        <div className='item'>유산균</div>
      </div>
      <div className='dummy'>
        <div className='time'>12:00:00</div>
        <div className='item'>비맥스</div>
      </div>
    </SchedulerWrapper>
  );
};

export default Scheduler;
