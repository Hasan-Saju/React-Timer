import React, { useState, useEffect, useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { TimerContext } from "./TimerContext";

const Clock = (props) => {
  const [stoptime, setStoptime] = useState(true);
  const [triggerAfterSecond, setTriggerAfterSecond] = useState(true);
  const [timerList, setTimerList] = useContext(TimerContext);

  let toBeEditedTimerList = [...timerList];

  const toggleTimer = () => {
    setStoptime(!stoptime);
  };

  useEffect(() => {
    if (!stoptime) {
      console.log("timer is running");

      timerCycle();

      setTimeout(function () {
        setTriggerAfterSecond(!triggerAfterSecond);
      }, 1000);
    } else {
      console.log("timer is stopped");
    }
  }, [stoptime, triggerAfterSecond]);

  function hour(hr, min) {
    if (min === 59) {
      return hr + 1;
    } else return hr;
  }

  function minute(min, sec) {
    if (min === 59) {
      return 0;
    } else if (sec == 59) {
      return min + 1;
    } else return min;
  }

  function second(min, sec) {
    if (sec == 59 || min == 59) {
      return 0;
    } else {
      return sec + 1;
    }
  }

  const timerCycle = () => {
    if (stoptime === false) {
      setTimerList(
        toBeEditedTimerList.map((timer, index) =>
          props.id === index
            ? {
                ...timer,
                hour: hour(
                  toBeEditedTimerList[props.id].hour,
                  toBeEditedTimerList[props.id].min
                ),

                min: minute(
                  toBeEditedTimerList[props.id].min,
                  toBeEditedTimerList[props.id].sec
                ),

                sec: second(
                  toBeEditedTimerList[props.id].min,
                  toBeEditedTimerList[props.id].sec
                ),
              }
            : timer
        )
      );

      console.log(timerList[props.id]);
    }
  };

  const deleteTimer = () => {
    setTimerList(
      toBeEditedTimerList.filter((timer, index) => props.id !== index)
    );
  };

  return (
    <div className='timer'>
      <div className='timer__rowOne'>
        <div className='timer__title'>{props.title}</div>
        <div className='timer__project'>{props.project}</div>
      </div>
      <div className='timer__rowTwo'>
        <div className='timer__timer'>
          {timerList[props.id].hour < 10 ? (
            <span>0{timerList[props.id].hour}</span>
          ) : (
            <span>{timerList[props.id].hour}</span>
          )}
          :
          {timerList[props.id].min < 10 ? (
            <span>0{timerList[props.id].min}</span>
          ) : (
            <span>{timerList[props.id].min}</span>
          )}
          :
          {timerList[props.id].sec < 10 ? (
            <span>0{timerList[props.id].sec}</span>
          ) : (
            <span>{timerList[props.id].sec}</span>
          )}
        </div>
      </div>
      <div className='timer__rowThree'>
        <div
          style={{ marginRight: "0.2em", cursor: "pointer" }}
          onClick={deleteTimer}
        >
          <DeleteIcon />
        </div>
        <div style={{ cursor: "pointer" }} onClick={props.changeEditMode}>
          <EditIcon />
        </div>
      </div>
      {stoptime && (
        <div className='timer__button' onClick={toggleTimer}>
          Start
        </div>
      )}
      {!stoptime && (
        <div className='timer__buttonRed' onClick={toggleTimer}>
          Stop
        </div>
      )}
    </div>
  );
};

export default Clock;
