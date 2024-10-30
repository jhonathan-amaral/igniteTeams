import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.GRAY_600};
`;
export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.GREEN_700,
  size: "large",
}))`
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;
