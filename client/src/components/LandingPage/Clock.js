import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ClockWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  width: 90%;
  aspect-ratio: 300/100;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ClockTimer = styled.div`
  font-size: 4rem;
  font-weight: 600;
  color: #323232;
`;

export const currentTimer = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const Clock = ({ currentTime, setCurrentTime }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(currentTimer);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <ClockWrapper>
      <ClockTimer>{currentTime}</ClockTimer>
    </ClockWrapper>
  );
};

export default Clock;
