import styled from "styled-components/native";

export const Container = styled.View``;

export const Header = styled.View`
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
  height: 173px;

  align-items: center;
  justify-content: center;
`;

export const Tasks = styled.View`
  background-color: ${(props) => props.theme.COLORS.GRAY_500};
  height: 100%;
`;

export const InsertTask = styled.View`
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-direction: row;

  margin-top: -30px;
`;

export const InsertInput = styled.TextInput`
  background-color: ${(props) => props.theme.COLORS.GRAY_500};
  padding: 16px;
  color: ${(props) => props.theme.COLORS.GRAY_100};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  font-size: ${(props) => props.theme.FONT_SIZE[16]};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.COLORS.GRAY_700};

  width: 271px;
  height: 54px;
`;

export const TasksPanel = styled.View`
  padding: 33px 24px 0 24px;
`;
export const StatusAtual = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 21px;
  border-bottom-color: ${(props) => props.theme.COLORS.GRAY_400};
  border-bottom-width: 1px;
`;

export const CreatedTasksView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const CreatedTasks = styled.Text`
  color: ${(props) => props.theme.COLORS.BLUE_400};
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
  font-size: ${(props) => props.theme.FONT_SIZE[14]};
`;

export const QuantityTasksBackGround = styled.View`
  background-color: ${(props) => props.theme.COLORS.GRAY_400};
  padding: 2px 8px;
  border-radius: 999px;

  justify-content: center;
  align-items: center;
`;

export const QuantityTasks = styled.Text`
  color: ${(props) => props.theme.COLORS.WHITE};
  font-size: ${(props) => props.theme.FONT_SIZE[12]};
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
`;

export const ConcludedTasksView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ConcludedTasks = styled.Text`
  color: ${(props) => props.theme.COLORS.PURPLE_400};
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
  font-size: ${(props) => props.theme.FONT_SIZE[14]};
`;

export const TasksList = styled.View``;

export const TaskCard = styled.View`
  background-color: ${(props) => props.theme.COLORS.GRAY_400};
  border-radius: 8px;
  padding: 12px 25px 12px 12px;
  height: 64px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const LabelCheckbox = styled.TouchableOpacity`
  height: 100%;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;

export const TaskDescriptionUnChecked = styled.Text`
  color: ${(props) => props.theme.COLORS.GRAY_100};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  font-size: ${(props) => props.theme.FONT_SIZE[14]};
  width: 285px;
`;

export const TaskDescriptionChecked = styled.Text`
  color: ${(props) => props.theme.COLORS.GRAY_300};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  font-size: ${(props) => props.theme.FONT_SIZE[14]};
  text-decoration: line-through;
  width: 285px;
`;

export const DeleteTask = styled.TouchableOpacity`
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const DeleteAlert = styled.View`
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

export const AlertText = styled.Text`
  width: 300px;
  text-align: center;
  font-size: ${(props) => props.theme.FONT_SIZE[12]};
  color: ${(props) => props.theme.COLORS.GRAY_300};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
`;

export const ActionsButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 16px;
`;

export const TextCancelButton = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE[12]};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  color: ${(props) => props.theme.COLORS.RED_400};
`;

export const TextConfirmButton = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE[12]};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  color: ${(props) => props.theme.COLORS.GRAY_100};
`;
