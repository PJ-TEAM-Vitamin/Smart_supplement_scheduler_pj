import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Presentation, WrapperModal, Modal, Button, PillInfoContainer, WarringItem } from './medicineInfoModalStyle';
import { PILL_INFO_REQUEST } from '../../reducers/data';

const MedicineInfoModal = ({ setMdInfo, name, id }) => {
  const { pillInfo, pillInfoLoading } = useSelector(state => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      PILL_INFO_REQUEST({
        id,
        name,
      }),
    );
  }, [dispatch]);
  // 모달 닫기
  const closeModal = () => {
    setMdInfo(false);
  };
  return (
    <Presentation>
      <WrapperModal>
        <Modal>
          {!pillInfoLoading && (
            <>
              <Button onClick={closeModal}>X</Button>
              <PillInfoContainer>
                <div className="title">
                  <div>{pillInfo?.itemName}</div>
                  <div>{pillInfo?.entpName}</div>
                </div>
                <div className="label">약의 효과</div>
                <textarea readOnly={true}>{pillInfo?.efcyQesitm.slice(3, -4)}</textarea>
                <div className="label">올바른 사용법</div>
                <textarea readOnly={true}>{pillInfo?.useMethodQesitm.slice(3, -4)}</textarea>
                {pillInfo?.state && (
                  <WarringItem>
                    <div className="Warring">Warring!!</div>
                    <p>{`이 약은  사용자가 먹을 수 없는 ${pillInfo?.state} 성분이 포함되어 있습니다!!`}</p>
                  </WarringItem>
                )}
              </PillInfoContainer>
            </>
          )}
        </Modal>
      </WrapperModal>
    </Presentation>
  );
};

export default MedicineInfoModal;
