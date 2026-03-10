/*aula 13 Criando o componente Footer
* não precisa de prpos nesta aula iremos apenas a trabalhar a questão
* de estilização do footer e dcorar as tags a no css, atribuir efeitos. 
*/
import styles from './styles.module.css'
export function Footer(){
    return (
    <footer   className={styles.footer}>
       <a href="">Sobre o Método Pomodoro 🍅</a>
       <a href="">Chronos Pomodoro &copy;{new Date().getFullYear()} Feito com 💚</a>
       </footer>
    )
    
}