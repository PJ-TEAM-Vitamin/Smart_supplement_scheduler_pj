import styled from 'styled-components';

export const InitPageContainer = styled.div`
  background-color: #fffff0;
`;

export const EnterInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
`;

export const InfoLeft = styled.div`
  width: 400px;
  height: 630px;
  background-color: #eddbc7;
  border-radius: 10px;
  margin: 15px;
  padding: 20px;

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;
export const InfoRight = styled.div`
  width: 400px;
  height: 630px;
  background-color: #eddbc7;
  border-radius: 10px;
  margin: 15px;
  padding: 20px;
`;

export const EnterName = styled.div`
  input {
    width: 80%;
    height: 30px;
    border: none;
    border-radius: 10px;
    border-bottom: 1px solid #b99b6b;
  }

  margin-bottom: 150px;
`;

export const GenderCheck = styled.div`
  label {
    font-size: 20px;
    margin-left: 10px;
  }

  margin-bottom: 150px;
`;

export const EnterAge = styled.div`
  input {
    width: 80%;
    height: 30px;
    border: none;
    border-radius: 10px;
    border-bottom: 1px solid #b99b6b;
  }
`;

export const Submit = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    width: 100px;
    height: 40px;

    font-size: 1rem;
    font-weight: 600;
    border: none;
    background-color: #eddbc7;
    border-radius: 10px;
  }
`;

export const Alarm = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;

  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const Tumbler = styled.div`
  align-items: center;
  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;
