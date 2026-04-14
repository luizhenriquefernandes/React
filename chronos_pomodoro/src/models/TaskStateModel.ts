export type TaskStateModel = {
  tasks: any[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: any | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};

// Mova a interface das Props para cá
export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};