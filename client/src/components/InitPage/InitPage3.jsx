import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Alarm, InitCommonHeader, InitPageContainer, MoveButton, SelectTimeForm, TimeInputItem } from './styles';
import Clock from '../../utils/img/clock.png';
const InitPage3 = ({ handleChangeState }) => {

   const [isCheck1, setCheck1] = useState(false);
   const [isCheck2, setCheck2] = useState(false);

   const toggleBtn1 = () => {
      setCheck1(isCheck1 => !isCheck1); // on,off 개념 boolean
   };

   const toggleBtn2 = () => {
      setCheck2(isCheck2 => !isCheck2); // on,off 개념 boolean
   };
   // const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
   // const [pick, setPick] = useState(arr);
   // const [select, setSelect] = useState([]);


   return (

    <InitPageContainer>
      <Alarm>
        <img className="clock" src={Clock} alt="clock" />
        <InitCommonHeader className="title" style={{ margin: '0px' }}>
          알림 시간을 설정하세요
        </InitCommonHeader>
         <div>
            {"두번째 알람 추가"}
            <button onClick={()=>toggleBtn1()}>
               {isCheck1 ? "-" : "+"}
            </button>
            <div>
               {"세번째 알람 추가"}
               <button onClick={()=>toggleBtn2()}>
                  {isCheck2 ? "-" : "+"}
               </button>
            </div>
         </div>

        <SelectTimeForm>
          <div className="timeInput">
            <TimeInputItem>
              <div className="timeLabel">첫번째 알람</div>
              <input type="time" name="time1" onChange={handleChangeState} />
            </TimeInputItem>
             {isCheck1 && (
                <TimeInputItem>
                   <div className="timeLabel">두번째 알람</div>
                   <input type="time" name="time2" onChange={handleChangeState} />
                </TimeInputItem>
             )}
             {isCheck2 &&(
                <TimeInputItem>
                   <div className="timeLabel">세번째 알람</div>
                   <input type="time" name="time3" onChange={handleChangeState} />
                </TimeInputItem>
             )}
          </div>
        </SelectTimeForm>
        <MoveButton>
          <Link to="/init/init4" style={{ color: '#fff', textDecoration: 'none' }}>
            <button>다음</button>
          </Link>
        </MoveButton>
      </Alarm>
    </InitPageContainer>
  );
};

export default InitPage3;
