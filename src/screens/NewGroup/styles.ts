import { UsersThree } from "phosphor-react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_600};
  padding: 0 24px 24px 24px;
`;
export const Content = styled.View`
  flex: 1;
  background-color: "#fff";
  justify-content: center;
`;
export const Title = styled.Text``;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.colors.GREEN_700,
}))`
  align-self: center;
`;
