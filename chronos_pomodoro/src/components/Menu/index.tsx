// aula 15 Utilizando o local storage para salvar o tema preferido do usuário
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

import { useEffect, useState } from 'react';
type MenuProps = {
 children?: React.ReactNode;
}
// definindo os temas que podem ser utilizados
type avaliableTheme = 'dark' | 'light';

export function Menu({children}: MenuProps) {
  /**Passo 2: 
   * Vamos fazer uma laze function função preguiçosa, para que registre no local storage
   * o tema que o usuário selecionou.  Assim quando o usuário recarregar a página, o tema que ele selecionou estará salvo no local storage do navegador.
   * para isso usamos o useState com uma função que verifica se existe um tema salvo no local storage.
   * se existir, retorna esse tema, se não existir, retorna o tema dark como padrão.
   */

  /**passo 4 criando uma tabela de busca para ícones:
   * import { SunIcon, MoonIcon } from 'lucide-react';
   * criar uma função que verifique o tema atual e retorne o ícone correspondente.
   * function getThemeIcon(theme: avaliableTheme) { 
   * o importante é que a função retorne o ícone correto baseado no tema atual. 
   *  if (theme === 'dark') {
   *    return <SunIcon />;
   *  } else {
   *    return <MoonIcon />;
   *  } Com a função acima conseguimos fazer a troca de ícones baseado no tema atual. Porém podemos simplificar essa função usando um operador ternário.
   */
  const nextThemeIcon = (theme: avaliableTheme) => {
    return theme === 'dark' ? <SunIcon /> : <MoonIcon />;
  };
  

  const[theme, setTheme] = useState<avaliableTheme>(() => {
    const storageTheme = localStorage.getItem('theme') as avaliableTheme | null;
    return storageTheme ? storageTheme : 'dark';
  });
  /** Paso 3 Explicando a função:
   * primeiro pegamos o valor do local storage com a chave 'theme'
   * depois verificamos se esse valor existe, se existir retornamos esse valor
   * se não existir retornamos o tema 'dark' como padrão. 
   * Assim o estado inicial do tema será o valor salvo no local storage ou o tema 'dark' se não houver nenhum valor salvo.
   * Agora precisamos fazer a função que irá alterar o tema quando o usuário clicar no ícone.
   */

function handleThemeChange(
  
  event: React.MouseEvent<HTMLAnchorElement,MouseEvent>,
){
  event?.preventDefault(); // prevenindo o evento padrão do clique
  
 
  setTheme(prevTheme => {
    const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
    return nextTheme
  });

  document.documentElement.setAttribute('data-theme', theme);
 
}


useEffect(() => {  
  document.documentElement.setAttribute('data-theme', theme);
  /**Importante é que a página consiga guardar a preferência do usuário, então é importante fazer guardar no historage local do site, como não é um grande volume e como não é tão relevante ao ponto de guardar em um banco de dados, o ideal é fazer a guarda no banco de dados do próprio html.
   * Para isso usamos o localStorage.setItem
   * o primeiro parâmetro é a chave que queremos guardar, o segundo é o valor que queremos guardar.
   * nesse caso a chave é theme e o valor é o tema que está selecionado.
   * Assim quando o usuário recarregar a página, o tema que ele selecionou estará salvo no local storage do navegador.
   * Depois é importante fazer a leitura desse valor quando a página for carregada, para isso usamos o localStorage.getItem
   * e fazemos a verificação se o valor é diferente de null, se for diferente de null, significa que o usuário já selecionou um tema, então pegamos esse valor e setamos no estado do tema. 
   */
  localStorage.setItem('theme', theme);
}, [theme]);


 return (
  // agora o menu será uma nav
  <nav className={styles.menu}>
    {/*Remover o h1 de exibição do tema atual porque agora temos o ícone que indica o tema. 
    <h1>{theme}</h1> */}
     <div className={styles.menuLink}> {children}     
      <a className = {styles.menuLink} 
      href="#" 
      aria-label='Ir para home' //caso se tenha leitor de tela ele lê
      title = 'Ir para a home'>
        <HouseIcon />
        
      </a>
      <a className = {styles.menuLink} 
      href="#" 
      aria-label='Histórico' //caso se tenha leitor de tela ele lê
      title = 'Histórico'>
        <HistoryIcon />
        
      </a>
      <a className = {styles.menuLink} 
      href="#" 
      aria-label='Configurações' //caso se tenha leitor de tela ele lê
      title = 'Configurações'>
        <SettingsIcon />
        
      </a>
      {/* Adiciona o evento onClick para chamar a função que alterna o tema */}
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Alternar tema" //caso se tenha leitor de tela ele lê
        title="Alternar tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon(theme)}
        
      </a>
      
      </div>     
  </nav>
 )
}
