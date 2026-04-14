import { useEffect, useState } from 'react';
import { Home } from './pages/Home';
import type { TaskStateModel } from './models/TaskStateModel';
import './styles/theme.css';
import './styles/global.css';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let timer: number;

    if (state.activeTask && state.secondsRemaining > 0) {
      timer = setInterval(() => {
        setState((prev) => {
          const newSeconds = prev.secondsRemaining - 1;
          const minutes = Math.floor(newSeconds / 60);
          const seconds = newSeconds % 60;
          
          return {
            ...prev,
            secondsRemaining: newSeconds,
            formattedSecondsRemaining: `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
          };
        });
      }, 1000);
    } else if (state.secondsRemaining === 0 && state.activeTask) {
      // Lógica de quando o tempo acaba
      alert("Ciclo finalizado!");
      setState(prev => ({ ...prev, activeTask: null }));
    }

    return () => clearInterval(timer);
  }, [state.activeTask, state.secondsRemaining]);

  return <Home state={state} setState={setState} />;
}