import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Destaques from './screen/destaques';
import BuscarFilmes from './screen/busca';
import IndicaFilmes from './screen/indicaFilme';
import About from './screen/about';
import { Ionicons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;

            if(route.name === 'DESTAQUES'){
              iconName = focused ?  'star' : 'star-outline';
            }else if(route.name === 'BUSCAR'){
              iconName = focused ? 'search' : 'search-outline';
            }else if(route.name === 'INDICAÇÕES'){
              iconName = focused ? 'thumbs-up' : 'thumbs-up-outline';
            }else if(route.name === 'ABOUT'){
              iconName = focused? 'information-circle' : 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabInactiveTintColor: 'gray',
          tabBarStyle: { display: 'flex' },
        })}
      >
        <Tab.Screen name="DESTAQUES" component={Destaques} />
        <Tab.Screen name="BUSCAR" component={BuscarFilmes} />
        <Tab.Screen name="INDICAÇÕES" component={IndicaFilmes} />
        <Tab.Screen name="ABOUT" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
