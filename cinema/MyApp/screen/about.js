// screens/about.js
import * as React from 'react';
import { View, Text, Button } from 'react-native';

function About({ navigation }) {
  return (
    <View style={{ display: 'flex', flexDirection:'row' , justifyContent: 'center', alignItems: 'center' }}>
      <Text>About Screen</Text>
      <Button
        title="Destaques"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Buscar Filmes"
        onPress={() => navigation.navigate('Buscar')}
      />
      <Button
        title="Indicações"
        onPress={() => navigation.navigate('Indica')}
      />
    </View>
  );
}

export default About;
