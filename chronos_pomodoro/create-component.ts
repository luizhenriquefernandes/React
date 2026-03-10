import fs from 'node:fs';
import path from 'node:path';

// 1. Pega o argumento do terminal
const componentName: string | undefined = process.argv[2];

if (!componentName) {
  console.error('❌ Por favor, forneça o nome do componente.');
  console.log('Exemplo: npm run gen Botao');
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