import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    background-color: ${theme.colors.GRAY_700};
    color: ${theme.colors.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  border-radius: 6px;
  padding: 16px;
`;
