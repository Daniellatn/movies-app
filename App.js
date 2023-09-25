import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PopularMovies from './screens/movies/PopularMovies';
import { PaperProvider } from 'react-native-paper';
import DetailsMovies from './screens/movies/DetailsMovies';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="popular-movies" component={PopularMovies} options={{ title: 'Filmes Populares' }} />
            <Stack.Screen name="details-movies" component={DetailsMovies} options={{ title: 'Detalhes do filme' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}