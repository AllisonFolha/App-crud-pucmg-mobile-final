import React, { useCallback, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import Card, { CadastroProps } from "../../components/card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { styles } from "./styles";

interface Props {
  navigation: any;
}

export default function Contas({ navigation }: Props) {
  const [data, setData] = useState<CadastroProps[]>([]);

  function handleEdit(id: any) {
    navigation.navigate("Cadastro", { id: id });
  }

  useFocusEffect(
    useCallback(() => {
      handleFectchData();
    }, [])
  );

  async function handleFectchData() {
    try {
      const jsonValue = await AsyncStorage.getItem("@fromHook:cadastro");
      const data = jsonValue ? JSON.parse(jsonValue) : [];
      setData(data);
      return jsonValue;
    } catch (e: any) {
      console.log(e);
    }
  }

  const renderItem = ({ item }: { item: CadastroProps }) => {
    return <Card data={item} onPress={() => handleEdit(item.id)} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
