// screens/busca.js
import * as React from 'react';
import { View, Text, Button } from 'react-native';

function BuscarFilmes({ navigation }) {
  return (
    <View style={{ display: 'flex', flexDirection:'row' , justifyContent: 'center', alignItems: 'center' }}>
      <Text>Buscar Filmes Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Indica"
        onPress={() => navigation.navigate('Indica')}
      />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

export default BuscarFilmes;
