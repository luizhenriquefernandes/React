import styles from './Heading.module.css'
import React from 'react';
type HeadingProps = {
  children: React.ReactNode
};
  

export function Heading({ children }: HeadingProps) {
  const nome = 'João'
  let n1:number = 10 
  let n2:number = 20 
  function soma(n1: number, n2: number): number {    
    return n1+n2;  
  }

  if (typeof children === 'string') {
    return (
      <>
        <h1 className={`${styles.heading} ${styles.cyan}`}>{children}</h1>
        <p className={styles.cyan}>{`Olá ${nome}`}</p>
      </>
    )
  }
  return (
    <>
    <h1 className={`${styles.heading} ${styles.cyan}`}>{children}</h1>
    <p className = {styles.cyan}>{`Olá ${nome}`}</p>
    {/* <p>{`A soma é ${soma(n1, n2)}}`</p> */}
    </> 
  )
}