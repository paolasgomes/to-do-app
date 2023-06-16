import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  width?: string;
  height?: string;
  variant?: "primary" | "secondary" | "tertiary";
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { width = "52px", height = "52px", variant = "primary", children, ...rest } = props;

  return (
    <S.Button width={width} height={height} variant={variant} {...rest}>
      {children}
    </S.Button>
  );
}
