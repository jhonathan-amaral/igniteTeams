import { View } from "react-native";
import { Container, LoadIndicator, Title } from "./styles";

export default function Loading() {
  return (
    <Container>
      <LoadIndicator />
      <Title>Carregando...</Title>
    </Container>
  );
}
