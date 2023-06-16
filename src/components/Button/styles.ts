import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export interface ButtonStyleProps {
  width: string;
  height: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = styled(TouchableOpacity)<ButtonStyleProps>`
  border-radius: 6px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  align-items: center;
  justify-content: center;

  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: ${(props) => props.theme.COLORS.BLUE_500};
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: ${(props) => props.theme.COLORS.GRAY_100};
      border: 1px solid ${(props) => props.theme.COLORS.RED_400};
    `}

    
  ${(props) =>
    props.variant === "tertiary" &&
    css`
      background-color: ${(props) => props.theme.COLORS.RED_400};
    `}
`;
