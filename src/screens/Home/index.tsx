import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvillIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Button } from "../../components/Button";
import { ModalComponent } from "../../components/Modal";
import { uuid } from "../../utils/uuid";
import * as S from "./styles";

interface TaskProps {
  id: string;
  description: string;
  isChecked?: boolean;
}

interface Modals {
  isOpen: boolean;
}

export default function HomePage() {
  const [textInput, setIsTextInput] = useState("");

  const [taskList, setTaskList] = useState<TaskProps[]>([]);

  const [modals, setModals] = useState<Modals>({
    isOpen: false,
  });

  const [taskId, setTaskId] = useState<string | null>(null);

  function handleCheckBox(id: string) {
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

  function handleModal() {
    setModals((state) => {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    });
  }

  function handleDeleteTask(taskId: string | null) {
    setTaskList((state) => {
      return state.filter((state) => {
        if (state.id !== taskId) {
          return state;
        }
      });
    });

    handleModal();
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

  useEffect(() => {}, [taskList]);

  const quantityTasksCreated = taskList.length;

  const quantityTasksChecked = taskList.filter((task) => {
    if (task.isChecked) {
      return task;
    }
  });

  const quantityTasksCompleted = quantityTasksChecked.length;
  console.log(quantityTasksCompleted);

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
                <S.QuantityTasks>{quantityTasksCreated}</S.QuantityTasks>
              </S.QuantityTasksBackGround>
            </S.CreatedTasksView>

            <S.ConcludedTasksView>
              <S.ConcludedTasks>Concluídas</S.ConcludedTasks>
              <S.QuantityTasksBackGround>
                <S.QuantityTasks>
                  {quantityTasksCompleted === 0 ? "0" : quantityTasksCompleted}
                </S.QuantityTasks>
              </S.QuantityTasksBackGround>
            </S.ConcludedTasksView>
          </S.StatusAtual>

          <S.TasksList>
            <FlatList
              data={taskList}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <S.TaskCard>
                  <S.LabelCheckbox
                    onPress={() => {
                      handleCheckBox(item.id);
                    }}
                  >
                    {item.isChecked ? (
                      <AntDesign name="checkcircle" size={20} color="#5E60CE" />
                    ) : (
                      <Entypo name="circle" size={20} color="#4EA8DE" />
                    )}

                    {item.isChecked ? (
                      <S.TaskDescriptionChecked>{item.description}</S.TaskDescriptionChecked>
                    ) : (
                      <S.TaskDescriptionUnChecked>
                        {item.description}
                      </S.TaskDescriptionUnChecked>
                    )}
                  </S.LabelCheckbox>

                  <S.DeleteTask
                    onPress={() => {
                      handleModal(), setTaskId(item.id);
                    }}
                  >
                    <EvillIcon name="trash" size={24} color="#808080" />
                  </S.DeleteTask>
                </S.TaskCard>
              )}
            />
          </S.TasksList>
        </S.TasksPanel>
      </S.Tasks>

      <ModalComponent isVisible={modals.isOpen} onBackButtonPress={handleModal}>
        <S.DeleteAlert>
          <FeatherIcon name="x-circle" size={72} color="#E25858" />
          <S.AlertText>
            Tem certeza que seja excluir esse usuário? Essa ação não poderá ser desfeita.
          </S.AlertText>
        </S.DeleteAlert>
        <S.ActionsButtons>
          <Button width="80px" height="48px" variant="secondary" onPress={handleModal}>
            <S.TextCancelButton>Cancelar</S.TextCancelButton>
          </Button>
          <Button
            width="80px"
            height="48px"
            variant="tertiary"
            onPress={() => handleDeleteTask(taskId)}
          >
            <S.TextConfirmButton>Confirmar</S.TextConfirmButton>
          </Button>
        </S.ActionsButtons>
      </ModalComponent>
    </S.Container>
  );
}
