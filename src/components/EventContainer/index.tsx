import { Container, ContainerHeader } from './style';
import arrow from '../../assets/images/arrow.svg';

export default function EventContainer() {
  return (
    <Container>
      <ContainerHeader>
        <div className="title">
          <h1>Os melhores</h1>
          <hr />
        </div>
        <div className="title">
          <a href="https://google.com">Ver todos</a>
          <img src={arrow} alt="Arrow" />
        </div>
      </ContainerHeader>
    </Container>
  );
}
