import type { HomeProps } from '../../models/TaskStateModel'; // Importe do Model, não da Page
import styles from './styles.module.css';

export function CountDown({ state }: Pick<HomeProps, 'state'>) {
  return (
    <div className={styles.container}>
      {state.formattedSecondsRemaining}
    </div>
  );
}