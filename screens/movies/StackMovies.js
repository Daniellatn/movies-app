import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PopularMovies from "./PopularMovies";
import DetailsMovies from "./DetailsMovies";
import DetailsActors from "../actors/DetailsActors";

const Stack = createNativeStackNavigator();

const StackMovies = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="popular-movies" component={PopularMovies} options={{ title: 'Filmes Populares' }} />
        <Stack.Screen name="details-movies" component={DetailsMovies} options={{ title: 'Detalhes do filme' }} />
        <Stack.Screen name="details-actors" component={DetailsActors} options={{ title: 'Detalhes do Ator' }} />
      </Stack.Navigator>
    </>
  )
}

export default StackMovies