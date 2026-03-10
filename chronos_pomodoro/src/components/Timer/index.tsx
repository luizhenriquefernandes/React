// aula 10 trabalhando com o Timer
//import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css'

export function Timer() {
 return (
  // agora o menu será uma nav
  <div className={styles.container}>
    <div className={styles.timer}>
      <span>00</span>
      <span>:</span>
      <span>00</span>
    </div>
  </div>
 )
}
