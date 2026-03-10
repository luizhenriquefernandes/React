import { ReactNode } from 'react';
import styles from './Heading.module.css'; // 1. Correção do nome (estava sytles)
export function Heading(props) {
    console.log(props);

    return (
        <h1 className={styles.heading}>
            {props.children}
        </h1>
    );
}
/** 
1. Correção do import de styles para styles.module.css 
2. Adição de ReactNode para tipagem correta do children
 3. Correção do nome styles para styles no import e uso
o props é
 * um objeto que contém todas as propriedades passadas para um componente React.
 * Essas propriedades podem ser usadas para personalizar o comportamento e a aparência do componente.
 * Exemplo:
 * function Greeting(props) {
 *   return <h1>Hello, {props.name}!</h1>;
 * }
 * Nesse caso, o props contém a propriedade name, que é usada para exibir o nome na saudação.
 * 
 */