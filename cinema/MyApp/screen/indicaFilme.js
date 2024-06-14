// screens/indicaFilme.js
import * as React from 'react';
import { View, Text, Button } from 'react-native';

function IndicaFilmes({ navigation }) {
  return (
    <View style={{ display: 'flex', flexDirection:'row' , justifyContent: 'center', alignItems: 'center' }}>
      <Text>Indica Filmes Screen</Text>
      <Button
        title="Destaques"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Buscar Filmes"
        onPress={() => navigation.navigate('Buscar')}
      />
      <Button
        title="About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

export default IndicaFilmes;
