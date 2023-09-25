import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Divider, Text } from "react-native-paper"
import apiMovies from "../../services/apiMovies"
import card from "../../styles/card"
import { Image, ScrollView, View } from "react-native"
import { FlatList } from "react-native-web"

const PopularMovies = ({navigation}) => {

  const [movies, setmovies] = useState([])

  useEffect(() => {
    getAllMovies()
  }, [])

  function getAllMovies() {
    apiMovies.get("/movie/popular").then(result => {
      setmovies(result.data.results)
    })
  }

  return (
    <>
      <ScrollView>
        <View style={card.container}>
          {movies.map(item => (
            <Card style={card.cardBack} key={item.id} onPress={() => navigation.push('details-movies', {id: item.id}) }>
              <Card.Cover resizeMode="contain" source={{ uri: 'http://image.tmdb.org/t/p/original' + item.backdrop_path }} />
              <Card.Content>
                <Text variant="titleLarge">{item.title}</Text>
                <Text variant="bodyMedium">{item.overview}</Text>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </>

  )
}

export default PopularMovies