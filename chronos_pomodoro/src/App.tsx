/**Aula 16 Fazeno o Generate e Criando o Home*/
/**Fazendo um algoritmo para criar um comando generate component
 * melhorando a visualização de subpastas no vs code
 * apert crtl + '
 * depois digite compact folders e desmarque a opção
 * PRONTO agora as pastas aparecem de forma mais clara
 * :
🛠️ Passo 1: Crie o arquivo create-component.ts
Na raiz do projeto (mesmo local do package.json), crie o arquivo e cole este código:

TypeScript

import fs from 'node:fs';
import path from 'node:path';

// 1. Pega o argumento do terminal
const componentName: string | undefined = process.argv[2];

if (!componentName) {
  console.error('❌ Por favor, forneça o nome do componente.');
  console.log('Exemplo: npm run generate Botao');
  process.exit(1);
}

// 2. Define o caminho da pasta (process.cwd() pega a raiz onde o comando rodou)
const dir = path.join(process.cwd(), 'src', 'components', componentName);

// 3. Template do Componente (index.tsx)
const componentTemplate = `import styles from './styles.module.css';

type ${componentName}Props = {
  children: React.ReactNode;
};

export function ${componentName}({ children }: ${componentName}Props) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
`;

// 4. Template do Estilo (styles.module.css)
const styleTemplate = `.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

// 5. Função Principal
function createComponent() {
  if (fs.existsSync(dir)) {
    console.error(`❌ O componente "${componentName}" já existe em: ${dir}`);
    process.exit(1);
  }

  // Cria a pasta (recursivo garante que cria pastas pai se não existirem)
  fs.mkdirSync(dir, { recursive: true });

  // Escreve o index.tsx
  fs.writeFileSync(path.join(dir, 'index.tsx'), componentTemplate);

  // Escreve o styles.module.css
  fs.writeFileSync(path.join(dir, 'styles.module.css'), styleTemplate);

  console.log(`✅ Componente ${componentName} criado com sucesso!`);
  console.log(`📂 ${dir}`);
}

createComponent();
⚙️ Passo 2: Configure o package.json
Para rodar um arquivo TypeScript como script, a maneira mais fácil hoje em dia é usar o executor tsx (não confunda com a extensão de arquivo, é o nome da ferramenta).

Abra seu terminal e instale o tsx como dependência de desenvolvimento (caso não tenha):

Bash

npm install -D tsx
Abra o package.json e adicione o script "gen":

JSON

"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "generate": "tsx create-component.ts"
},
🚀 Passo 3: Teste o comando
Agora é só rodar no terminal:

Bash

npm run generate MainForm
O script vai:

Criar a pasta src/components/NovoComponente.

Criar o index.tsx totalmente tipado.

Criar o styles.module.css.


Agora segue um passo importante, iremos criar uma pasta chamada templates dentro de src/ mas fora de components, e dentro de templates criaremos uma pasta chamada MainForm, e dentro dela criaremos dois arquivos index.tsx e styles.module.css, e depois copiar os conteúdos de maind form que foi criado em components para lá, isso porque o mainform é um template que poderá ser usado em outras partes do projeto futuramente, e assim mantemos a organização do código.
Depoia de criar as pastas pages/Home e templates/MainTemplate, iremos criar o arquivo index.tsx em cada uma dessas pastas e copiar os códigos respectivos para lá.
Iremos agora apagar o código de app .tsx e refazer ele do zero para entender melhor como tudo funciona.


 */
import './styles/global.css';
import './styles/theme.css';
import { Home } from './pages/Home';
export function App() {  
  return (
  <Home />   
  );     
}
