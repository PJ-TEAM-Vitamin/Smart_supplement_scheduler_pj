import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
const SchedulerWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
  min-height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px;
  background-color: #ffbfa9;
  display: flex;
  align-items: center;
`;

const SchedulerTitle = styled.div`
  width: 40%;
  text-align: center;
  color: #3a4f7a;
  font-size: 1.3rem;
  font-weight: 800;
`;
const SchedulerTime = styled.div`
  width: 20%;
  text-align: center;
`;
const SchedulerPills = styled.div`
  width: 40%;
  .item {
    margin-left: 10px;
    margin-right: 10px;
    float: right;
  }
`;

const Scheduler = ({ time, title, cartidges }) => {
  const { cartridgeInfo } = useSelector((state) => state.data);

  return (
    <SchedulerWrapper>
      <SchedulerTitle>{title}</SchedulerTitle>
      <SchedulerTime>{time}</SchedulerTime>
      <SchedulerPills>
        {cartidges?.map((v) => (
          <div className='item'>{cartridgeInfo[v]?.name}</div>
        ))}
      </SchedulerPills>
    </SchedulerWrapper>
  );
};

export default Scheduler;
