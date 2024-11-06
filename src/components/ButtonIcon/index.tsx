import type { TouchableOpacityProps } from "react-native";
import { type ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import type { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ icon, type }: Props) {
  return (
    <Container>
      <Icon name={icon} type={type} />
    </Container>
  );
}
