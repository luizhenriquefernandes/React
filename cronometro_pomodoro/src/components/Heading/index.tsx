import styles from './style.module.css';
type HeadingProps = {
    children : React.ReactNode;
}
export function Heading({children}:HeadingProps){
    return(
        <> 
            <div className={styles.heading}>{children}</div>
        </>
    );
}