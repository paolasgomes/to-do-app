import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvillIcon from "react-native-vector-icons/EvilIcons";
import IonIcons from "react-native-vector-icons/Ionicons";
import logomarca from "../../assets/logo.png";
import { Button } from "../../components/Button";
import * as S from "./styles";

export default function HomePage() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckBox() {
    setIsChecked((state) => !state);
  }

  return (
    <S.Container>
      <StatusBar style="light" translucent />
      <S.Header>
        <Image source={logomarca} />
      </S.Header>
      <S.Tasks>
        <S.InsertTask>
          <S.InsertInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
          />
          <Button>
            <IonIcons name="add-circle-outline" size={20} color="#FFFF" />
          </Button>
        </S.InsertTask>

        <S.TasksPanel>
          <S.StatusAtual>
            <S.CreatedTasksView>
              <S.CreatedTasks>Criadas</S.CreatedTasks>
              <S.QuantityTasksBackGround>
                <S.QuantityTasks>0</S.QuantityTasks>
              </S.QuantityTasksBackGround>
            </S.CreatedTasksView>

            <S.ConcludedTasksView>
              <S.ConcludedTasks>Concluídas</S.ConcludedTasks>
              <S.QuantityTasksBackGround>
                <S.QuantityTasks>0</S.QuantityTasks>
              </S.QuantityTasksBackGround>
            </S.ConcludedTasksView>
          </S.StatusAtual>

          <S.TasksList>
            <S.TaskCard>
              <S.Checkbox onPress={handleCheckBox}>
                {isChecked ? (
                  <AntDesign name="checkcircle" size={20} color="#5E60CE" />
                ) : (
                  <Entypo name="circle" size={20} color="#4EA8DE" />
                )}
              </S.Checkbox>

              {isChecked ? (
                <S.TaskDescriptionChecked>
                  Integer urna interdum massa libero auctor neque turpis turpis semper.
                </S.TaskDescriptionChecked>
              ) : (
                <S.TaskDescriptionUnChecked>
                  Integer urna interdum massa libero auctor neque turpis turpis semper.
                </S.TaskDescriptionUnChecked>
              )}

              <S.DeleteTask>
                <EvillIcon name="trash" size={24} color="#808080" />
              </S.DeleteTask>
            </S.TaskCard>
          </S.TasksList>
        </S.TasksPanel>
      </S.Tasks>
    </S.Container>
  );
}
