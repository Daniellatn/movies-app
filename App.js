import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PopularMovies from './screens/movies/PopularMovies';
import { PaperProvider } from 'react-native-paper';
import DetailsMovies from './screens/movies/DetailsMovies';
import DetailsActors from './screens/actors/DetailsActors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="popular-movies" component={PopularMovies} options={{ title: 'Filmes Populares' }} />
            <Stack.Screen name="details-movies" component={DetailsMovies} options={{ title: 'Detalhes do filme' }} />
            <Stack.Screen name="details-actors" component={DetailsActors} options={{ title: 'Detalhes do Ator' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}