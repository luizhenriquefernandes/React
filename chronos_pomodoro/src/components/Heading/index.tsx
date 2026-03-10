/**aula 14 inserindo estados
 * O importante é inserir estados dentro de um componente
 * também é importante saber sobre hooks, hooks são 
 */
import styles from './styles.module.css'

type HeadingProps = {
  /**
   * children: tipo do react que pode ser qualquer conteúdo
   * no caso
   * children: string - informa que é do tipo string
   * mas o ideal é usar o react node que pode ser qualquer conteúdo
   * como texto, botão, div, etc.
   */
  children: React.ReactNode;
  
  /**
   * ele deixa usar qualquer tipo de conteúdo
  importante para o aluno entender que pode ser um texto, um botão, uma div, etc.
  utililizando o react node children: string;
   OBS fazer em um segundo momento da aula que irá parar o
  erro de attr e attr2
  attr: number;
  attr2: string;   */  
};
/**Já usando o método 4 só para o site rodar fazer os passos 1,2,3 com os alunos */

export function Heading({children}: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
/** 1 PASSAR AO ALUNO COMO TEORIA explicando o props
 * export function Heading(props) {
  aqui é importante explicar o que é o props
  props é um objeto que contém todas as propriedades passadas para o componente.
  é importante explicar que este é o primeiro passo que iremos
 * fazer antes de tudo para mostrar ao aluno que é possível fazer parâmetro sem tipagem.
  export function Heading(props) {
  return <h1 className={styles.heading}>{props.children}</h1>;
  nota este tipo de estrutura props, quer dizer que é any, ou seja ainda não foi tipado com um parâmetro
  e a chave children.
  e neste caso o componente para de dar erro
}
  2 fazendo o destruturing do java script
 * o destruturing é uma forma de extrair valores de arrays ou propriedades de objetos em variáveis distintas.
 * um exemplo simples de destruturing em objetos seria:
  const pessoa = { nome: 'João', idade: 30 };
  const { nome, idade } = pessoa;
  console.log(nome); // Saída: João
  console.log(idade); // Saída: 30
 export function Heading(props: HeadingProps) {
 children é uma propriedade de props
  return <h1 className={styles.heading}>{props.children}</h1>;
}
  3. fazendo o destruturing com uma variável
export function Heading(props: HeadingProps) {
  const {children} = props;
  return <h1 className={styles.heading}>{children}</h1>;
}
/*4. agora fazendo o destruturing direto no parâmetro
 export function Heading({children}: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
 * 
 */