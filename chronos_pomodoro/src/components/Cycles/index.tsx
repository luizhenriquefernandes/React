import styles from './styles.module.css';
// aula 11 trabalhando com DefaultInput
/**NOTAS PARA A AULA
 * Importante explicar sobre o union type, que basta
 * inserir um pipe | entre os tipos
 * Aqui estamos dizendo que o DefaultInputProps é a união
 * entre um objeto que tem a propriedade id do tipo string
 * e todas as propriedades de um input do HTML
 * React.ComponentProps<'input'> é uma forma de pegar todas as propriedades
 * que um elemento input do HTML pode ter
 * como type, placeholder, value, onChange, etc.
 * Dessa forma, nosso componente DefaultInput pode receber qualquer
 * propriedade que um input normal aceitaria, além do id que definimos
 * também podemos inserir o intersection type (&) para combinar tipos
 * nesse caso estamos combinando um objeto com a propriedade id
 * e todas as propriedades de um input do HTML
 */
export function Cycles() {
  return (
    //inserir um elemento por volta
    <div className={styles.cycles}>
        <span>Ciclos: </span>
        <div className={styles.cycleDots}>
            {/* agora o conceito de chamar diversas classes para o css
            consiste em inserir crase e sifrão */}
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.longBreakTime}`}></span>
        </div>
    </div>
  )
}

