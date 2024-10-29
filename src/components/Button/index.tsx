import type { TouchableOpacityProps } from "react-native";
import { type ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type, ...rest }: Props) {
  return (
    <Container type={type ?? "PRIMARY"} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
