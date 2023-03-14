import React from 'react';
import {
  Modal,
  LeftItem,
  RightItme,
  Button,
  ComfirmImg,
} from './medicineAlarmStyle';

const ComfirmDisplay = ({ closeModal }) => {
  return (
    <Modal>
      <LeftItem>
        <ComfirmImg></ComfirmImg>
      </LeftItem>
      <RightItme>
        <h1>알약이 나오고 있습니다.</h1>
        <h2>잠시만 기다려 주세요!</h2>
        <Button className='mainBtn' onClick={closeModal}>약이 나왔습니다.</Button>
        <Button className='subBtn'>약이 나오지 않았습니다.</Button>
      </RightItme>
    </Modal>
  );
};

export default ComfirmDisplay;
