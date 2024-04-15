import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";

export interface CadastroProps {
  id: string;
  primeiroNome: string;
  segundoNome: string;
  email: string;
  game: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export interface CardProps {
  data: CadastroProps;
  onPress: () => void;
}

export default function Card({ data, onPress }: CardProps) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Text
          style={styles.nome}
        >{`${data.primeiroNome} ${data.segundoNome}`}</Text>
        <TouchableOpacity onPress={onPress}>
          <Icon as={MaterialCommunityIcons} name="pencil" mx={2} size={23} />
        </TouchableOpacity>
      </View>
      <Text style={styles.game}>{`${data.game}`}</Text>
      <Text style={styles.email}>{`${data.email}`}</Text>
    </View>
  );
}
