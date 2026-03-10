import styles from './styles.module.css'
type FormProps = {
    children: React.ReactNode;
}
export function Form({children}: FormProps){
    return (
        <div className={styles.form}>
            <div className={styles.content}>{children}</div>
        </div>
    )
}