import styled from 'styled-components';
import Smile from '../../utils/img/smileF.png';
import pill from '../../utils/img/fallingPills.png';

export const Presentation = styled.div`
  z-index: 1200;
  position: absolute;
  width: 100%;
`;
export const WrapperModal = styled.div`
  width: 100%;
  position: fixed;
  inset: 0px;
  background-color: rgb(0 0 0 / 71%);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: center;
`;
export const Modal = styled.div`
  position: relative;
  width: 80%;
  box-shadow: 0px 3px 3px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  overflow: hidden;
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 10px;
  margin-right: 10px;
  background-color: #fff;
  border: none;
  font-size: 1.2rem;
  font-weight: bolder;
`;
export const PillInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  width: 80%;
  height: 90%;
  .title {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.6rem;
  }
  .label {
    margin-top: 20px;
  }
  textarea {
    width: 80%;
    min-height: 150px;
    padding: 10px;
    box-sizing: border-box;
    border: solid 2px gray;
    border-radius: 5px;
    font-size: 16px;
    resize: none;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const WarringItem = styled.div`
  .Warring {
    color: red;
    font-size: 1.3rem;
    font-weight: bold;
  }
  font-weight: bolder;
`;
