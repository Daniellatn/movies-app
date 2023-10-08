import { ScrollView, View } from "react-native"
import card from "../../styles/card"
import { useEffect, useState } from "react"
import apiMovies from "../../services/apiMovies"
import { Card, Text } from "react-native-paper"

const PopularActors = ({navigation}) => {

  const [actors, setactors] = useState([])

  useEffect(() => {
    getAllActors()
  },[])

  function getAllActors() {
    apiMovies.get("/person/popular").then(result => {
      setactors(result.data.results)
    })
  }

  return (
    <>
      <ScrollView>
        <View style={card.containerActor}>
          {actors.map(item => (
            <Card style={card.cardPosterActor} key={item.id} onPress={() => navigation.push('details-actors', { id: item.id })}>
              <Card.Cover resizeMode="contain" source={{ uri: 'http://image.tmdb.org/t/p/original' + item.profile_path }} />
              <Card.Content style={card.cardTextActor}>
                <Text variant="titleLarge">{item.name}</Text>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default PopularActors