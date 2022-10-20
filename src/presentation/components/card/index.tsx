import { ICharacter } from "../../../interfaces/models/char";
import {
  Container,
  ImageContainer,
  InfoContainer,
  StatusContainer,
  Text,
  Title,
  TitleContainer,
} from "./styles";
interface CardProps {
  item: ICharacter;
}
function Card({ item }: CardProps) {
  return (
    <Container>
      <ImageContainer>
        <img src={item.image} alt="Character" style={{ width: "100%" }} />
      </ImageContainer>

      <InfoContainer>
        <TitleContainer>
          <Title>{`${item.name}`}</Title>
        </TitleContainer>
        <StatusContainer>
          <Text>{`Gender: ${item.gender}`}</Text>
          <Text>{`Status: ${item.status}`}</Text>
          <Text>{`Species: ${item.species}`}</Text>
        </StatusContainer>
      </InfoContainer>
    </Container>
  );
}

export default Card;
