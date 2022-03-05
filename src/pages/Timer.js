import React from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {useNavigate} from 'react-router-dom';


function Timer(){
    const navigate = useNavigate();
    return (
        
    <CountdownCircleTimer
        isPlaying = {true}
        duration={3}
        colors={['#FFFFFF']}
        colorsTime={[3]}
        onComplete={() => {
            navigate('/home/');
        }}
        >
        {({ remainingTime, color }) => <span style={{ color }}>
            {remainingTime}
          </span>}
    </CountdownCircleTimer>
    )

}
function Countdown() {
    
    return (
    <div className="timer-wrapper">
        <div>
            WODC
        </div>
        <Timer />
        <div>
            Are you ready?!
        </div>
    </div>
    );
}
  
export default Countdown;
  