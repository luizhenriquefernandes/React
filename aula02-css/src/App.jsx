import './styles/global.css'
import './styles/theme.css'
export function App() {
  return (
    <>
      <h1>Olá Mundo</h1>
      <br />
      <p>Resumo da diferençaTipoComo Exportar (App.jsx)Como Importar (main.jsx)Default (Atual)export default function App() {}import App from './App'Nomeado (O que você quer)export function App() {}import { App } from './App'Dica: Usar { App } (Named Export) é geralmente preferido em projetos grandes porque obriga o nome da importação a ser exato, evitando erros de digitação e facilitando o auto-complete do editor.
        <br />
 Parte 2 --> explicação das mudanças feitas nos arquivos CSS e estrutura do projeto:
 1. O que foi feito tecnicamente no CSS?
 Você utilizou o recurso de CSS Custom Properties (conhecidas como Variáveis CSS).
 Você utilizou o recurso de CSS Custom Properties (conhecidas como Variáveis CSS).
<br />
 No arquivo theme.css: Você definiu o seletor :root. Esse é o nível mais alto do CSS (equivalente à tag), o que torna essas variáveis globais.
 Exemplo: --primary-color: #3498db; define que onde você usar essa variável, a cor será esse azul específico.
 No arquivo global.css: Você usou a função var() para consumir essas variáveis.
<br />
 Exemplo: color: var(--primary-color); diz ao navegador: "Pinte este h1 com a cor que está guardada na variável --primary-color".
<br />
 Vantagem técnica: Se você quiser mudar o azul do site todo amanhã, você só muda no theme.css e todos os elementos (h1, botões, bordas) atualizam automaticamente.
<br />
 2. Por que a importância da criação da pasta styles?
A criação da pasta src/styles é uma decisão de Organização e Arquitetura.
<br />
 Separation of Concerns (Separação de Responsabilidades): No desenvolvimento profissional, misturar lógica (JavaScript/JSX) com estilização (CSS) na mesma pasta raiz vira uma bagunça rapidamente.
<br />
 Escalabilidade: Em um projeto pequeno não parece fazer diferença, mas imagine um projeto com 50 componentes. Ter uma pasta dedicada para estilos globais, temas e resets facilita que qualquer desenvolvedor encontre onde as cores e fontes estão definidas.
<br />
 3. Como isso impactou no ?
 O impacto no h1; acontece através da Cascata e da Importação:
<br />
 O App.jsx importou os arquivos: import './styles/theme.css' e global.css.
<br />
 Ao carregar a página, o navegador leu o theme.css e registrou as cores na memória.
<br />
 Em seguida, leu o global.css e viu que o h1 deve usar a fonte e a cor definidas na memória.
<br />
 Resultado: O "Olá Mundo" renderizado na tela (dentro do componente App) apareceu azul e com a fonte Helvetica Neue, sem que você precisasse escrever o código de cor hexadecimal direto no arquivo do componente.
<br />
 4. Por que teve que tirar o CSS original do componente App?
 Quando criamos um projeto React (via Vite ou Create-React-App), ele vem com estilos "opiniosos" padrão (geralmente centralizando texto, fundo escuro, fontes padrão).
<br />
 O motivo da remoção: Você precisava de uma "tela em branco" (Clean Slate). Se você mantivesse o CSS original (App.css padrão), ele poderia conter regras que entrariam em conflito com o seu novo global.css (por exemplo, text-align: center ou cores de fundo).
<br />
 Remover o CSS original garante que apenas as regras que você criou (seu sistema de design) sejam aplicadas.
<br />
 5. Essa pasta styles é necessária/obrigatória?
Tecnicamente (para o código rodar): NÃO. O computador não liga se o arquivo está em src/App.css ou src/styles/theme.css. Se você jogasse todos os arquivos na raiz, o site funcionaria igual. <br />

 Profissionalmente (para manutenção): SIM, é necessária. É uma "Best Practice" (Boa Prática).
 <br />

 Se você não criar pastas para organizar (styles, components, assets), seu projeto será considerado "amador" ou difícil de manter por outros programadores.
<br />
 Portanto, embora não seja obrigatória para o código compilar, ela é mandatória para manter a saúde e qualidade do projeto a longo prazo.
 </p>
    </>
  )
}
// export default App
/**
 * Resumo da diferençaTipoComo Exportar (App.jsx)Como Importar (main.jsx)Default (Atual)export default function App() {}import App from './App'Nomeado (O que você quer)export function App() {}import { App } from './App'Dica: Usar { App } (Named Export) é geralmente preferido em projetos grandes porque obriga o nome da importação a ser exato, evitando erros de digitação e facilitando o auto-complete do editor.
 Parte 2 --> explicação das mudanças feitas nos arquivos CSS e estrutura do projeto:
 1. O que foi feito tecnicamente no CSS?
 Você utilizou o recurso de CSS Custom Properties (conhecidas como Variáveis CSS).

 No arquivo theme.css: Você definiu o seletor :root. Esse é o nível mais alto do CSS (equivalente à tag <html>), o que torna essas variáveis globais.

 Exemplo: --primary-color: #3498db; define que onde você usar essa variável, a cor será esse azul específico.

 No arquivo global.css: Você usou a função var() para consumir essas variáveis.

 Exemplo: color: var(--primary-color); diz ao navegador: "Pinte este h1 com a cor que está guardada na variável --primary-color".

 Vantagem técnica: Se você quiser mudar o azul do site todo amanhã, você só muda no theme.css e todos os elementos (h1, botões, bordas) atualizam automaticamente.

 2. Por que a importância da criação da pasta styles?
A criação da pasta src/styles é uma decisão de Organização e Arquitetura.

 Separation of Concerns (Separação de Responsabilidades): No desenvolvimento profissional, misturar lógica (JavaScript/JSX) com estilização (CSS) na mesma pasta raiz vira uma bagunça rapidamente.

 Escalabilidade: Em um projeto pequeno não parece fazer diferença, mas imagine um projeto com 50 componentes. Ter uma pasta dedicada para estilos globais, temas e resets facilita que qualquer desenvolvedor encontre onde as cores e fontes estão definidas.

 3. Como isso impactou no <h1>?
 O impacto no <h1> acontece através da Cascata e da Importação:

 O App.jsx importou os arquivos: import './styles/theme.css' e global.css.

 Ao carregar a página, o navegador leu o theme.css e registrou as cores na memória.

 Em seguida, leu o global.css e viu que o h1 deve usar a fonte e a cor definidas na memória.

 Resultado: O "Olá Mundo" renderizado na tela (dentro do componente App) apareceu azul e com a fonte Helvetica Neue, sem que você precisasse escrever o código de cor hexadecimal direto no arquivo do componente.

 4. Por que teve que tirar o CSS original do componente App?
 Quando criamos um projeto React (via Vite ou Create-React-App), ele vem com estilos "opiniosos" padrão (geralmente centralizando texto, fundo escuro, fontes padrão).

 O motivo da remoção: Você precisava de uma "tela em branco" (Clean Slate). Se você mantivesse o CSS original (App.css padrão), ele poderia conter regras que entrariam em conflito com o seu novo global.css (por exemplo, text-align: center ou cores de fundo).

 Remover o CSS original garante que apenas as regras que você criou (seu sistema de design) sejam aplicadas.

 5. Essa pasta styles é necessária/obrigatória?
Tecnicamente (para o código rodar): NÃO. O computador não liga se o arquivo está em src/App.css ou src/styles/theme.css. Se você jogasse todos os arquivos na raiz, o site funcionaria igual.

 Profissionalmente (para manutenção): SIM, é necessária. É uma "Best Practice" (Boa Prática).

 Se você não criar pastas para organizar (styles, components, assets), seu projeto será considerado "amador" ou difícil de manter por outros programadores.

 Portanto, embora não seja obrigatória para o código compilar, ela é mandatória para manter a saúde e qualidade do projeto a longo prazo.
 */
