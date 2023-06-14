import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import logomarca from "../../assets/logo.png";
import { Button } from "../../components/Button";
import * as S from "./styles";

export default function HomePage() {
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
            <Ionicons name="add-circle-outline" size={20} color="#FFFF" />
          </Button>
        </S.InsertTask>

        <S.TaskList>
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
        </S.TaskList>
      </S.Tasks>
    </S.Container>
  );
}
