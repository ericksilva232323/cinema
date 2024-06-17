// screens/BuscarFilmes.js
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function BuscarFilmes(){
  return(
    <View style={styles.container}>
      <Text>Pesquisar Filmes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 80,
    paddingTop: 50,
  }
})

export default BuscarFilmes;
