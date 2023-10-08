import { StyleSheet } from "react-native";


const card = StyleSheet.create({
  container : {
    display: 'grid',
    flexDirection: 'column',
    justifyItems: 'center',
  },
  cardPoster: {
    height: 210,
    width: 135,
    margin: 5,
  },
  poster: {
    height: 210,
    width: 135,
  },
  cardBack: {
    margin: 10
  },
  title: {
    marginTop: 5
  },
  containerActor: {
    flexDirection:"row",
    flexWrap: "wrap",
    alignItems: "center"
  },
  cardPosterActor: {
    height: 300,
    width: 135,
    margin: 5,
  },
  cardTextActor:{
    alignItems: "center",
  }
})

export default card