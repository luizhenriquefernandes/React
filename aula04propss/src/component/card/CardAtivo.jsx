import styles from './CardAtivo.module.css'
export function CardAtivo(props){
    console.log(props)
    return(
        <div className={styles.cardativo}>
            {props.children}
            <h1>teste</h1>        <p>teste</p>   
        </div>
    )
}