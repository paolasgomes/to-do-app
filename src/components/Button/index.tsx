import * as S from "./styles";

export interface ButtonProps {
  width?: string;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { width = "52px", variant, children, ...rest } = props;

  return (
    <S.Button width={width} variant={variant} {...rest}>
      {children}
    </S.Button>
  );
}