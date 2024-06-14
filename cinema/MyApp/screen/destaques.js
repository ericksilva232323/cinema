// screens/destaques.js
import * as React from 'react';
import { View, Text, Button } from 'react-native';

function Destaques({ navigation }) {
  return (
    <View style={{ display: 'flex', flexDirection:'row' , justifyContent: 'center', alignItems: 'center' }}>
      <Text>Destaques Screen</Text>
      <Button
        title="Go to Buscar"
        onPress={() => navigation.navigate('Buscar')}
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

export default Destaques;
