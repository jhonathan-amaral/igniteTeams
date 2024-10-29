import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_600};
  padding: 32px 24px 24px 24px;
`;
