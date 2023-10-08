import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import PopularMovies from './screens/movies/PopularMovies';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StackMovies from './screens/movies/StackMovies';
import StackActors from './screens/actors/StackActors';
import StackTv from './screens/tv/StackTv';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Filmes"
              component={StackMovies}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="movie-filter" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Atores"
              component={StackActors}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-group" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Séries"
              component={StackTv}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="youtube-tv" size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}