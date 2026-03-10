import styles from './styles.module.css';
/* aula 12 trabalhando com DefaultButton
/**NOTAS PARA A AULA
 * Importante explicar sobre o union type, que basta
 * inserir um pipe | entre os tipos
 * como existe uma diversidade de botões no HTML é importante deixar
 * um botão como padrão e permitir que o usuário do componente
 * possa passar qualquer propriedade que um botão HTML aceitaria
 * como type, onClick, disabled, etc. Também outros botões terão outros layouts.
*/
type DefaultButtonProps = {
   icon: React.ReactNode,
   /**Isso idica que o React.ReactNode busca qualquer elemento que o
    * HTML aceite, como string, number, elemento JSX, etc.
    * Assim o usuário do componente pode passar qualquer coisa
    * dentro do ícone.
    */
   color?: 'green' | 'red';
  /**o ponto de interrogação indica que a propriedade é opcional
   * se o usuário não passar nada, o componente assume o valor padrão
   * de green.
   * Isso é útil para evitar erros quando o usuário não passar a propriedade.
   * Também é possível definir valores padrão dentro do componente
   * usando desestruturação com valores padrão.
   * Exemplo: function DefaultButton({ color = 'green' }: DefaultButtonProps) {
   *  return (
   *   <button className={styles.button} style={{ backgroundColor: color }}>
   *  </button>
   * );
   * 
  */

}& React.ComponentProps<'button'>;

export function DefaultButton({icon, 
  color = 'green',
  ...props}: DefaultButtonProps) {

  return( 
    <>
    {/* podemos fazer assim tabém
      {labelText && <label htmlFor={id}>{labelText}</label>} porque se labelText for verdadeiro ele renderiza o label.
    */}
   
     <button className={`${styles.button} ${styles[color]}`}{...props}>
     {/* o ...props é usado para passar todas as outras props que não foram explicitamente definidas. 
      Isso é útil quando você quer permitir que o componente aceite qualquer propriedade válida para um elemento HTML específico,
     */}
     {icon}
     </button>
    </>
  )
}
