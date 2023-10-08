import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PopularTv from './PopularTv';
import DetailsTv from './DetailsTv';
import DetailsMovies from '../movies/DetailsMovies';
import DetailsActors from '../actors/DetailsActors';

const Stack = createNativeStackNavigator();

const StackTv = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="popular-tv" component={PopularTv} options={{ title: 'Séries Populares' }} />
        <Stack.Screen name="details-tv" component={DetailsTv} options={{ title: 'Detalhes do Ator' }} />
        <Stack.Screen name="details-actors" component={DetailsActors} options={{ title: 'Detalhes do Ator' }} />
      </Stack.Navigator>
    </>
  )
}

export default StackTv