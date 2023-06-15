import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvillIcon from "react-native-vector-icons/EvilIcons";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Button } from "../../components/Button";
import { uuid } from "../../utils/uuid";
import * as S from "./styles";

interface TasksProps {
  id: string;
  description: string;
  isChecked?: boolean;
}

export default function HomePage() {
  const [textInput, setIsTextInput] = useState("");

  const [taskList, setTaskList] = useState<TasksProps[]>([]);

  function handleCheckBox(id: any) {
    setTaskList((state) => {
      return state.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isChecked: !task.isChecked,
          };
        }
        return task;
      });
    });
  }

  function handleTextChange(text: string) {
    setIsTextInput(text);
  }

  function handleInsertTask(textInput: string) {
    const newTask = {
      id: uuid(),
      description: `${textInput}`,
    };

    setTaskList((state) => {
      return [...state, newTask];
    });

    setIsTextInput("");
  }

  return (
    <S.Container>
      <StatusBar style="light" translucent />
      <S.Header>
        <Image source={require("../../assets/logo.png")} />
      </S.Header>
      <S.Tasks>
        <S.InsertTask>
          <S.InsertInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            maxLength={70}
            onChangeText={handleTextChange}
            value={textInput}
          />
          <Button onPress={() => handleInsertTask(textInput)}>
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
            <FlatList
              data={taskList}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <S.TaskCard>
                  <S.Checkbox
                    onPress={() => {
                      handleCheckBox(item.id);
                    }}
                  >
                    {item.isChecked ? (
                      <AntDesign name="checkcircle" size={20} color="#5E60CE" />
                    ) : (
                      <Entypo name="circle" size={20} color="#4EA8DE" />
                    )}
                  </S.Checkbox>

                  {item.isChecked ? (
                    <S.TaskDescriptionChecked>{item.description}</S.TaskDescriptionChecked>
                  ) : (
                    <S.TaskDescriptionUnChecked>{item.description}</S.TaskDescriptionUnChecked>
                  )}

                  <S.DeleteTask>
                    <EvillIcon name="trash" size={24} color="#808080" />
                  </S.DeleteTask>
                </S.TaskCard>
              )}
            />
          </S.TasksList>
        </S.TasksPanel>
      </S.Tasks>
    </S.Container>
  );
}
