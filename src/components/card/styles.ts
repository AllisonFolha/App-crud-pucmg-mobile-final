import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    margin: 5,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nome: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 23,
  },
  email: {
    fontSize: 18,
    color: "grey",
  },
  game: {
    fontSize: 18,
    color: "grey",
  },
  endereco: {
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 10,
  },
  banco: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
