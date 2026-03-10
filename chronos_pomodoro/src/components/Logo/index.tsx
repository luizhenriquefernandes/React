// aula 08 Trabalhando com logo
import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css'

type LogoProps = {
 children?: React.ReactNode;
}
export function Logo({children}: LogoProps) {
 return (
  <div className={styles.logo}>
     <div className={styles.logoLink}> {children}
      {/* npm install lucide-react perceba que um fica do lado do outro
       Neste caso importante fazer um display flex no css
       também pensar que ao utlizar o camel case fica melhor para chamar as propriedades
      nota-se que o ícone ficou vermelho por que foi adicionado uma classe no css
      */}
      <a className = {styles.logoLink} href="/">
        <TimerIcon />
        <span>Chronos</span>
      </a>
      
      </div>     
  </div>
 )
}
