import Modal from "react-native-modal";
import * as S from "./styles";

interface Props {
  isVisible: boolean;
  onBackButtonPress: () => void;
  children: React.ReactNode;
}

export function ModalComponent(props: Props) {
  const { children, ...rest } = props;
  return (
    <S.Container>
      <Modal {...rest} animationIn="bounce" animationInTiming={300}>
        <S.ModalContainer>{children}</S.ModalContainer>
      </Modal>
    </S.Container>
  );
}
