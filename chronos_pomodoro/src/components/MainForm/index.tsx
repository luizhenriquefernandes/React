import { useState } from 'react';
import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import type { HomeProps } from '../../models/TaskStateModel'; 

export function MainForm({ state, setState }: HomeProps) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    // Atualiza o estado global para iniciar a tarefa
    setState((prev) => ({
      ...prev,
      activeTask: { title: taskName }, // Definindo a tarefa ativa
      secondsRemaining: prev.config.workTime * 60, // Ex: 25 * 60
      formattedSecondsRemaining: `${prev.config.workTime}:00`,
    }));
    
    setTaskName(''); // Limpa o input
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='formRow'>
        <p>Tarefa atual: {state.activeTask?.title || "Nenhuma"}</p>
        <DefaultInput
          labelText='Tarefa'
          id='meuInput'
          type='text'
          placeholder='No que você vai focar agora?'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} type="submit" />
      </div>
    </form>
  );
}