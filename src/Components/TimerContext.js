import { createContext, useState } from "react";

export const TimerContext = createContext();

export const TimerContextProvider = (props) => {
  const [timerList, setTimerList] = useState([
    {
      title: "Mow lawn",
      project: "House Chores",
      hour: 1,
      min: 0,
      sec: 56,
      editMode: false,
    },
    {
      title: "Clear paper jam",
      project: "Office Chores",
      hour: 0,
      min: 21,
      sec: 13,
      editMode: false,
    },
    {
      title: "Ponder origins of universe",
      project: "Life Chores",
      hour: 14,
      min: 0,
      sec: 0,
      editMode: false,
    },
  ]);
  return (
    <TimerContext.Provider value={[timerList, setTimerList]}>
      {props.children}
    </TimerContext.Provider>
  );
};
