import styled from 'styled-components';

export const HealthcareWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
`;
export const CalendarArea = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  .calendar {
    width: 95%;
    border-radius: 10px;
    border: none;
  }
`;
export const HealthInfoArea = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const HealthView = styled.div`
  width: 80%;
  height: 80%;
  background-color: #ffebeb;
  border-radius: 20px;
  box-shadow: 5px 5px 15px 5px gainsboro;
`;

export const HealthHeader = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    display: flex;
  }
  .header {
    color: #d14d72;
    font-size: 2.3rem;
    font-weight: 800;
  }
  .date {
    display: flex;
    align-items: end;
    vertical-align: bottom;
    margin-left: 10px;
    font-size: 0.8rem;
    color: gray;
  }
`;
export const HealthContent = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const GoalImg = styled.div`
  text-align: center;
  .goal {
    width: 30%;
  }
  .going {
    width: 40%;
  }
`;

export const HealthInfo = styled.div`
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  width: 80%;
  text-align: center;
  border-radius: 10px;
  &.pill {
    border: solid 2px #e06469;
  }
  &.water {
    border: solid 2px #19a7ce;
    display: flex;
    align-items: center;
    justify-content: center;
    .info {
      margin-left: 20px;
      .amount {
        display: flex;
      }
      .impact {
        font-weight: bold;
        color: #19a7ce;
        margin-right: 5px;
      }
      .result {
        font-weight: bold;
        margin-top: 10px;
      }
    }
    img {
      width: 50px;
    }
  }
`;
