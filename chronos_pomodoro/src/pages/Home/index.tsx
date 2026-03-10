import { Container } from '../../components/Container';
import { Timer } from '../../components/Timer';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  return (
    <MainTemplate>
        <Container>
            <Timer />
        </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}