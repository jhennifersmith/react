import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { FIRESTORE_DB } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

const Cadastro = ({ navigation }: any) => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState<any[]>([]);
  const addTarefa = async () => {
    const doc = addDoc(collection(FIRESTORE_DB, "Tarefas"), {
      title: tarefa,
      done: false,
    });
    setTarefa("");
  };

  return (
    <View>
      <Text>Lista</Text>
      <Text>Informe a tarefa: </Text>
      <TextInput
        placeholder="Informe a tarefa"
        onChangeText={(t: string) => setTarefa(t)}
        value={tarefa}
      />

      <Button
        onPress={() => addTarefa()}
        title="Adicionar Tarefa"
        disabled={tarefa === ""}
      />
      <Button title="Listagem" onPress={() => navigation.navigate("Lista")} />
    </View>
  );
};

export default Cadastro;
