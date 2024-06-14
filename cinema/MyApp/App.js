import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Destaques from './screen/destaques';
import BuscarFilmes from './screen/busca';
import IndicaFilmes from './screen/indicaFilme';
import About from './screen/about';


const stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Destaques} />
        <stack.Screen name="Buscar" component={BuscarFilmes} />
        <stack.Screen name="Indica" component={IndicaFilmes} />
        <stack.Screen name="About" component={About} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
