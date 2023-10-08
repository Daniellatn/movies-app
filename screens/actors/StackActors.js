import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PopularActors from "./PopularActors";
import DetailsActors from "./DetailsActors";
import DetailsMovies from "../movies/DetailsMovies";

const Stack = createNativeStackNavigator();

const StackActors = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="popular-actors" component={PopularActors} options={{ title: 'Atores Populares' }} />
      <Stack.Screen name="details-actors" component={DetailsActors} options={{ title: 'Detalhes do Ator' }} />
      <Stack.Screen name="details-movies" component={DetailsMovies} options={{ title: 'Detalhes do filme' }} />
    </Stack.Navigator>
  )
}

export default StackActors