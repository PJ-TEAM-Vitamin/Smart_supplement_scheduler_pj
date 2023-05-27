import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentTimer } from '../LandingPage/Clock';
import Smile from '../../utils/img/smileF.png';
import Angry from '../../utils/img/angryF.png';
import Usual from '../../utils/img/usualF.png';
import {DISCHARGE_REQUEST, INTAKE_OR_NOT_REQUEST, RECORD_OF_TIME_REQUEST} from '../../reducers/data';
import ComfirmDisplay from './ComfirmDisplay';
import {
  Presentation,
  WrapperModal,
  Modal,
  LeftItem,
  RightItme,
  FaceImg,
  Button,
} from './medicineAlarmStyle';

const GetToday = () => {
  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜

  return `${year}-${month}-${date}`;
};

/**
 * # 알약 섭취 알림
 * 5분 마다 표정이 변화 (좋음 - 무표정 - 나쁨)
 * 섭취 버튼 클릭시 알약 배출 요청 및 알약 배출 확인 창을 표시
 * 배출 확인 버튼 클릭 시 모달 종료 및 섭취 시간 기록 요청
 * 나쁨 표정에서 동작이 없으면 5분 후 모달 꺼진다.
 * @returns
 */
const MedicineAlarm = ({ setMdAlarm, alarmId, userId }) => {
  const dispatch = useDispatch();
  // console.log('id: ', alarmId)

  const [nextDisplay, setNextDisplay] = useState(false); // 복용 버튼 클릭시 다음 화면 디스플레이
  const handleNextDisplay = () => {
    setNextDisplay(true);
  };

  // 모달 닫기
  const closeModal = () => {
    dispatch(INTAKE_OR_NOT_REQUEST({
      type: false,
      alarmId: alarmId,
      userId: userId,
    }));
    setMdAlarm(false);
  };

  /**
   * 약 먹은 시간 및 날짜 서버에 전송
   */
  const onClickTime = () => {
    dispatch(
      RECORD_OF_TIME_REQUEST({
        time: currentTimer(),
        day: GetToday(),
      })
    );
    dispatch(INTAKE_OR_NOT_REQUEST({
      type: true,
      alarmId: alarmId,
      userId: userId,
    }));
    dispatch(DISCHARGE_REQUEST({
      alarmId: alarmId,
      userId: userId,
    }));
    setNextDisplay(true);
  };

  // 얼굴 표정 변화
  useEffect(() => {
    function timeFace(time, look) {
      return new Promise((resolve, reject) => {
        const phase = setTimeout(() => {
          const $face = document.querySelector('.face');
          if ($face) {
            $face.style.background = `url(${look})no-repeat center/cover`;
            console.log(time);
            resolve();
          } else {
            if (temp.length > 0) {
              temp.map((v) => clearTimeout(v));
            }
            reject({ error: 'closed display' });
          }
        }, 1000 * time);
        temp.push(phase);
      });
    }
    const temp = []; // setTimeout 객체 보관
    timeFace(0, Smile)
      .then(() => {
        timeFace(3, Usual);
      })
      .then(() => {
        timeFace(6, Angry);
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  return (
    <Presentation>
      <WrapperModal>
        {nextDisplay ? (
          <ComfirmDisplay closeModal={closeModal} />
        ) : (
          <Modal>
            <LeftItem>
              <FaceImg className='face'></FaceImg>
            </LeftItem>
            <RightItme>
              <Button className='mainBtn' onClick={onClickTime}>
                지금 먹어요!
              </Button>
              <Button className='subBtn' onClick={closeModal}>
                지금 먹지 않을래요!
              </Button>
            </RightItme>
          </Modal>
        )}
      </WrapperModal>
    </Presentation>
  );
};

export default MedicineAlarm;
