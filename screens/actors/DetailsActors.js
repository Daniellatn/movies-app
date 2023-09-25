import { Avatar, Card, IconButton, Text } from "react-native-paper"
import apiMovies from "../../services/apiMovies"
import { useEffect, useState } from "react"
import { ScrollView, View } from "react-native"
import detailsActor from "../../styles/detailsActor"
import { formatDate } from "../../util/convertValues"

const DetailsActors = ({ navigation, route }) => {

  const [actor, setactor] = useState([])
  const [moviesactor, setmoviesactor] = useState([])
  const imageNotDefault = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png'

  useEffect(() => {
    const id = route.params.id
    getDetailsActor(id)
    getAllMoviesActor(id)
  }, [])

  function getDetailsActor(id) {
    apiMovies.get(`/person/${id}`).then(result => {
      setactor(result.data)
    })
  }

  function getAllMoviesActor(id) {
    apiMovies.get(`/person/${id}/movie_credits`).then(result => {
      setmoviesactor(result.data.cast)
    })
  }

  return (
    <>
      <ScrollView>
        <Text style={detailsActor.title}>{actor.name}</Text>
        <View style={detailsActor.container}>
          <View style={detailsActor.poster}>
            <Card>
              <Card.Cover source={{ uri: 'http://image.tmdb.org/t/p/original' + actor.profile_path }} />
            </Card>
          </View>
          <View style={detailsActor.infos}>
            <Text style={detailsActor.infoText}>Sexo: {actor.gender == 1 ? 'Feminino' : 'Masculino'}</Text>
            <Text style={detailsActor.infoText}>Data Nascimento: {formatDate(actor.birthday)}</Text>
            <Text style={detailsActor.infoText}>Lugar de Nascimento: {actor.place_of_birth}</Text>
          </View>
        </View>
        <View style={detailsActor.cardOverview}>
          <Card mode="outlined">
            <Card.Content>
              <Text style={detailsActor.overview} >{actor.biography}</Text>
            </Card.Content>
          </Card>
          <Text style={detailsActor.titleActor}>Filmes</Text>
          {
            moviesactor.map(item => (
              <Card key={item.id} style={detailsActor.cardActor} mode="outlined" onPress={() => navigation.push('details-movies', {id: item.id})}>
              <Card.Title
                title={item.title}
                subtitle={formatDate(item.release_date)}
                left={(props) => <Avatar.Image size={48} source={{uri: item.poster_path != null ? 'http://image.tmdb.org/t/p/original' + item.poster_path : imageNotDefault}} />}
                right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => { }} />}
              />
            </Card>
            ))
          }

        </View>
      </ScrollView>
    </>
  )
}

export default DetailsActors