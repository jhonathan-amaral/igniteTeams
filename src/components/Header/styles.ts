import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;
export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;
export const BackButton = styled(TouchableOpacity)`
  flex: 1;
`;
export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.WHITE,
}))``;
