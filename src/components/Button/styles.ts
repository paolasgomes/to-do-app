import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export interface ButtonStyleProps {
  width: string;
  variant?: "primary" | "secondary";
}

export const Button = styled(TouchableOpacity)<ButtonStyleProps>`
  background-color: ${(props) => props.theme.COLORS.BLUE_500};
  border-radius: 6px;
  width: ${(props) => props.width};
  height: 52px;

  align-items: center;
  justify-content: center;

  /* ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: ${(props) => props.theme.COLORS.GRAY_500};
    `} */
`;
