import "./App.css";
import React from "react";
import Dashboard from "./TimerDashboard/Dashboard";
import { TimerContextProvider } from "./Components/TimerContext";

function App() {
  return (
    <div className='App'>
      <div className='app__header'>Timers</div>
      <TimerContextProvider>
        <Dashboard />
      </TimerContextProvider>
    </div>
  );
}

export default App;
