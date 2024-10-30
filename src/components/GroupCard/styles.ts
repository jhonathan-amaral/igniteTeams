import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }) => theme.colors.GRAY_500};
  border-radius: 6px;
  flex-direction: row;

  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.REGULAR};
    color: ;
    ${theme.colors.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.GREEN_700,
  weight: "fill",
}))`
  margin-right: 20px;
`;
