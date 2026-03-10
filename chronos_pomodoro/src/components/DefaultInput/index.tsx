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
type DefaultInputProps = {
    id:string;//força para que a propriedade id seja obrigatória
    labelText?: string; //propriedade opcional para o texto do label, é importante explicar o uso do ? para propriedades opcionais, o aluno deve entender que o ? indica que a propriedade é opcional o que significa que o componente pode ser usado sem passar essa propriedade. mas se for passada, deve ser uma string. que é o tipo definido. 
}& React.ComponentProps<'input'>;

export function DefaultInput({id, type, labelText,...rest}: DefaultInputProps) {

  return( 
    <>
    {/* podemos fazer assim tabém
      {labelText && <label htmlFor={id}>{labelText}</label>} porque se labelText for verdadeiro ele renderiza o label.
    */}
    {labelText ? <label htmlFor={id}>{labelText}</label> : null}
     {/**importante explicar o uso do htmlFor no label
      * o htmlFor é usado para associar o label a um input específico
      * o valor do htmlFor deve ser igual ao id do input correspondente
      * isso melhora a acessibilidade, pois permite que os usuários
      * cliquem no label para focar no input associado
      * no caso acima, estamos usando uma expressão condicional
      * para renderizar o label apenas se a propriedade labelText for fornecida
     <label htmlFor="{id}"></label>
     <input id={id} type={type} />*/}
     <input className={styles.input} id={id} type={type} {...rest} />
     {/* o ...rest é usado para passar todas as outras props que não foram explicitamente definidas. 
     className = {styles.input} aplica o estilo do módulo CSS ao input. Que serve para estilizar o input de forma isolada.
     */}
    </>
  )
}
