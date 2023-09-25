import { StyleSheet } from "react-native";

const detailsActor = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5
  },
  poster: {
    flex: 2,
    height: 210,
    width: 135,
    marginBottom: 0
  },
  infos: {
    flex: 3,
    marginLeft: 5,
    justifyContent: 'space-evenly',
    marginBottom: 5,   
  },
  cardOverview: {
    flex: 2,
    margin: 5,
  },
  cardActor: {
    marginTop: 5,
  },
  overview: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'justify'
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleActor: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
    margin: 5
  },
})

export default detailsActor