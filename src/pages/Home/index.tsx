import { ContentBody, ContentSection, TextContainer } from './styles';
import dancing from '../../assets/images/dancing.svg';
import { Button } from '../../components/Button';
import EventContainer from '../../components/EventContainer';

export default function Home() {
  return (
    <>
      <ContentSection>
        <ContentBody>
          <TextContainer>
            <h1>Encontre o melhor rolé na sua cidade</h1>
            <div>
              <p>Aqui quem decide o melhor rolé é o povo</p>
              <p>O rolé mais votado da sua cidade estará no topo da lista</p>
            </div>
            <Button>Cadastre seu rolé</Button>
          </TextContainer>
          <img src={dancing} alt="People dancing" />
        </ContentBody>
      </ContentSection>
      <EventContainer />
    </>
  );
}
