import React, { useEffect, useState } from 'react'
import apiMovies from '../../services/apiMovies'
import { ScrollView, View } from 'react-native'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import { formatDate, formatReal, formatVote } from '../../util/convertValues'
import detailsMovies from '../../styles/detailsMovies'

const DetailsTv = ({ navigation, route }) => {

  const [tv, settv] = useState({})
  const [actor, setactor] = useState([])
  const imageNotDefault = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png'

  useEffect(() => {
    const id = route.params.id
    getDetailTv(id)
    getAllActors(id)
  }, [])

  function getDetailTv(id) {
    apiMovies.get(`/tv/${id}`).then(result => {
      settv(result.data)
    })
  }

  function getAllActors(id) {
    apiMovies.get(`/tv/${id}/credits`).then(result => {
      setactor(result.data.cast)
    })
  }

  return (
    <>
      <ScrollView>
        <View style={detailsMovies.container}>
          <View>
            <Card>
              <Card.Cover resizeMode="contain" source={{ uri: 'http://image.tmdb.org/t/p/original' + tv.backdrop_path }} />
              <Card.Content>
                <Text variant="titleLarge">{tv.name}</Text>
                <Text variant="bodyMedium">{tv.overview}</Text>
              </Card.Content>
            </Card>
          </View>
        </View>
        <View style={detailsMovies.cardOverview}>
          <Card mode="outlined">
            <Card.Content>
              <Text style={detailsMovies.infoText}>Temporadas: {tv.number_of_seasons}</Text>
              <Text style={detailsMovies.infoText}>Episodios: {tv.number_of_episodes}</Text>
              <Text style={detailsMovies.infoText}>Votos: {formatVote(tv.vote_average != null ? tv.vote_average : 0)}</Text>
              <Text style={detailsMovies.infoText}>Lançamento: {formatDate(tv.first_air_date != null ? tv.first_air_date : '0000-00-00')}</Text>
            </Card.Content>
          </Card>
          <Text style={detailsMovies.titleActor}>Atores</Text>
          {actor.map(item => (
            <Card key={item.id} style={detailsMovies.cardActor} mode="outlined" onPress={() => navigation.push('details-actors', { id: item.id })}>
              <Card.Title
                title={item.character}
                subtitle={item.original_name}
                left={(props) => <Avatar.Image size={48} source={{ uri: item.profile_path != null ? 'http://image.tmdb.org/t/p/original' + item.profile_path : imageNotDefault }} />}
                right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => { }} />}
              />
            </Card>
          ))}
        </View>
      </ScrollView>

    </>
  )
}

export default DetailsTv