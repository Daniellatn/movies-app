import { useEffect, useState } from "react"
import { Avatar, Card, IconButton, Text } from "react-native-paper"
import apiMovies from "../../services/apiMovies"
import detailsMovies from "../../styles/detailsMovies"
import { ScrollView, View } from "react-native"

const DetailsMovies = ({ navigation, route }) => {

  const [movie, setmovie] = useState({})
  const [actor, setactor] = useState([])
  const imageNotDefault = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png'

  useEffect(() => {
    const id = route.params.id
    getDetailMovies(id),
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
        <Text style={detailsMovies.title}>{movie.title}</Text>
        <View style={detailsMovies.container}>
          <View style={detailsMovies.poster}>
            <Card>
              <Card.Cover source={{ uri: 'http://image.tmdb.org/t/p/original' + movie.poster_path }} />
            </Card>
          </View>
          <View style={detailsMovies.infos}>
            <Text style={detailsMovies.infoText}>Orçamento: {movie.budget}</Text>
            <Text style={detailsMovies.infoText}>Voto: {movie.vote_average}</Text>
            <Text style={detailsMovies.infoText}>Duração: {movie.runtime}</Text>
            <Text style={detailsMovies.infoText}>Lançamento: {movie.release_date}</Text>
          </View>
        </View>
        <View style={detailsMovies.cardOverview}>
          <Card mode="outlined">
            <Card.Content>
              <Text style={detailsMovies.overview} >{movie.overview}</Text>
            </Card.Content>
          </Card>
          <Text style={detailsMovies.titleActor}>Atores</Text>
          {actor.map(item => (
            <Card key={item.id} style={detailsMovies.cardActor} mode="outlined">
              <Card.Title
                title={item.character}
                subtitle={item.original_name}
                left={(props) => <Avatar.Image size={48} source={{uri: item.profile_path != null ? 'http://image.tmdb.org/t/p/original' + item.profile_path : imageNotDefault}} />}
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