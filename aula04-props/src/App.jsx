
import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading.jsx'

export function App() {  
/**Conceito de chield
 * Chield é um componente que é passado como filho de outro componente.
 * No React, os componentes podem receber outros componentes como filhos, 
 * permitindo a criação de interfaces mais complexas e reutilizáveis.
 * Exemplo:
 * <App>
 *   <Header />
 * </App>
 * Nesse caso, o Header é um chield do App.
 */
  return (
    <>
      <div>
        <h1>Olá 🎮</h1>
         <Heading>Meu Primeiro Componente</Heading>        
      </div>
     
    </>
  )
}
