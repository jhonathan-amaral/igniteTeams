import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_600};
`;
export const Content = styled.View`
  padding: 0 24px;
`;
