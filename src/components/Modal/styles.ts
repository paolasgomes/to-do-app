import styled from "styled-components/native";

export const Container = styled.View``;

export const ModalContainer = styled.View`
  flex: 0.3;

  border-radius: 10px;
  background-color: ${(props) => props.theme.COLORS.GRAY_100};
  padding: 12px;
`;
