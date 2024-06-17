// screens/About.js
import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function About(){
  return(
    <View style={styles.container}>
      <Text>About</Text>
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

export default About;
