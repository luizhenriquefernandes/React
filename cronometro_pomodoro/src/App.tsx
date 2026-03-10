import './styles/global.css';
import './styles/theme.css';
import {Container} from './components/Container/index';
import {Heading} from './components/Heading/index';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
export function App() {
  return (
    <>
       <Container>
          <Logo />
       </Container>
       <Container>
          < Menu/>
       </Container>
        <Container>
          <Heading>
              children
          </Heading>
          </Container>
    </>
  )
}
