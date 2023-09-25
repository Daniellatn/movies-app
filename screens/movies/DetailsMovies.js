import { useEffect, useState } from "react"
import { Avatar, Card, IconButton, Text } from "react-native-paper"
import apiMovies from "../../services/apiMovies"
import detailsMovies from "../../styles/detailsMovies"
import { ScrollView, View } from "react-native"
import { formatDate, formatReal, formatVote } from "../../util/convertValues"

const DetailsMovies = ({ navigation, route }) => {

  const [movie, setmovie] = useState({})
  const [actor, setactor] = useState([])
  const imageNotDefault = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png'

  useEffect(() => {
    const id = route.params.id
    getDetailMovies(id)
    getAllActors(id)
  }, [])

  function getDetailMovies(id) {
    apiMovies.get(`/movie/${id}`).then(result => {
      setmovie(result.data)
    })
  }

  function getAllActors(id) {
    apiMovies.get(`/movie/${id}/credits`).then(result => {
      setactor(result.data.cast)
    })
  }

  return (
    <>
      <ScrollView>
        <View style={detailsMovies.container}>
          <View>
            <Card>
              <Card.Cover resizeMode="contain" source={{ uri: 'http://image.tmdb.org/t/p/original' + movie.backdrop_path }} />
              <Card.Content>
                <Text variant="titleLarge">{movie.title}</Text>
                <Text variant="bodyMedium">{movie.overview}</Text>
              </Card.Content>
            </Card>
          </View>
        </View>
        <View style={detailsMovies.cardOverview}>
          <Card mode="outlined">
            <Card.Content>
              <Text style={detailsMovies.infoText}>Orçamento: {formatReal(movie.budget != null ? movie.budget : 0)}</Text>
              <Text style={detailsMovies.infoText}>Voto: {formatVote(movie.vote_average != null ? movie.vote_average : 0)}</Text>
              <Text style={detailsMovies.infoText}>Duração: {movie.runtime != null ? movie.runtime : 0} min.</Text>
              <Text style={detailsMovies.infoText}>Lançamento: {formatDate(movie.release_date != null ? movie.release_date : '0000-00-00')}</Text>
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

export default DetailsMovies