import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import card from '../../styles/card'
import apiMovies from '../../services/apiMovies'

const PopularTv = ({navigation}) => {

  const [tv, settv] = useState([])

  useEffect(() => {
    getAllTv()
  }, [])

  function getAllTv() {
    apiMovies.get("/tv/popular").then(result => {
      settv(result.data.results)
    })
  }

  return (
    <>
      <ScrollView>
        <View style={card.container}>
          {tv.map(item => (
            <Card style={card.cardBack} key={item.id} onPress={() => navigation.push('details-tv', { id: item.id })}>
              <Card.Cover resizeMode="contain" source={{ uri: 'http://image.tmdb.org/t/p/original' + item.backdrop_path }} />
              <Card.Content>
                <Text variant="titleLarge">{item.name}</Text>
                <Text variant="bodyMedium">{item.overview}</Text>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default PopularTv