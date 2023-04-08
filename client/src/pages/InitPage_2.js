import React, {useContext, useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import styled from "styled-components";

import {SmartDispatchContext} from "../index";
import MedicationInput from "../components/InitPage/MedicationInput";

const InitPageContainer = styled.div`
  background-color: #FFFFF0;
`;

// const onClickJoin = () => {
//
//   // navigate('/', {state: {value: state}});
// };

const InitPage_2 = () => {
   // const [weekdayFrom, handleWeekdayFrom] = useState(
   //    new Date()
   // );

   const navigate = useNavigate();
   const location = useLocation();
   const info = location.state?.value;
   console.log(info);
   const [state, setState] = useState({
      currentTime:'',
      alarmTime:'',

   });


   const checkAlarmClock= () => {
      if(this.state.alarmTime === 'undefined' || !this.state.alarmTime) {
         this.alarmMessage = "Please set your alarm.";
      } else {
         this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
         if(this.state.currentTime === this.state.alarmTime) {
            alert("its time!");
         } else {
            console.log("not yet");
         }
      }
   };

  const componentDidMount =() =>{
      this.clock = setInterval(
         () => this.setCurrentTime(),
         1000
      )
      this.interval = setInterval(
         () => this.checkAlarmClock(),
         1000)
   };

   const componentWillUnmount =() =>{
      clearInterval(this.clock);
      clearInterval(this.interval);
   };

   const setCurrentTime = ()=>{
      this.setState({
         currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
      });
   };

   const setAlarmTime = (e)=> {
      e.preventDefault();
      const inputAlarmTimeModified = e.target.value + ':00';
      this.setState({
         alarmTime: inputAlarmTimeModified
      });
   };



   return (
      <InitPageContainer>
         <div>
            <h1>React Alarm Clock</h1>
            <h2>It is {state.currentTime}</h2>
            <form>
               <input type="time" onChange={setAlarmTime}></input>
            </form>
         </div>
      </InitPageContainer>
   )
};

export default InitPage_2;