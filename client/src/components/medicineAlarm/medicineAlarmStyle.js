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
  box-shadow: 0px 3px 3px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
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
export const LeftItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
export const RightItme = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FaceImg = styled.div`
  background-image: url(${Smile});
  width: 90%;
  aspect-ratio: 1/1;
`;
export const Button = styled.button`
  width: 70%;
  height: 70px;
  border: none;
  margin: 10px;
  border-radius: 20px;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  &.mainBtn {
    background-color: #4b56d2;
  }
  &.subBtn {
    background-color: #eb455f;
  }
`;

export const ComfirmImg = styled.div`
  background-image: url(${pill});
  width: 90%;
  /* height: auto; */
  aspect-ratio: 700/624;
  background-size: cover;
`;
