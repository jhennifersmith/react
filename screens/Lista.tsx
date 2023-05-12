import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";

const Lista = ({ navigation }: any) => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState<any[]>([]);

  useEffect(() => {
    const TarefasRef = collection(FIRESTORE_DB, "Tarefas");
    const subscriber = onSnapshot(TarefasRef, {
      next: (snapshot) => {
        const tarefas: any[] = [];
        snapshot.docs.forEach((doc) => {
          tarefas.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setTarefas(tarefas);
      },
    });
    return () => subscriber();
  }, []);

  const ExcluirElemento = async (id: any) => {
    try {
        const colecao = collection(FIRESTORE_DB, "Tarefas");
        const elemento = doc(colecao, id);
        await deleteDoc(elemento);
        alert("Elemento excluido com sucesso!")
    } catch (erro) {
      alert("Falha ao excluir!" + erro);
    }
  };

  return (
    <View>
      <View>
        {tarefas.map((tarefa) => (
          <>
            <Text key={tarefa.id}> {tarefa.title} </Text>
            <TouchableOpacity
              onPress={() => ExcluirElemento(tarefa.id)}
            >Excluir</TouchableOpacity>
          </>
        ))}
      </View>
      {/* <Button 
            title="Detalhes"
            onPress={() =>navigation.navigate('Detalhes')}
            /> */}
    </View>
  );
};
export default Lista;
