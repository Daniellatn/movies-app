import { StyleSheet } from "react-native";

const detailsMovies = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
  cardOverview: {
    flex: 2,
    margin: 5,
  },
  cardActor: {
    marginTop: 5,
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleActor: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 5
  },
})

export default detailsMovies