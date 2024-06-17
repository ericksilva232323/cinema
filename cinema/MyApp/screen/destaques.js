// screens/Destaques.js
import React,{ useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import axios from 'axios';


const BASEURL =`http://www.omdbapi.com/?s=movie&type=movie&apikey=3434d090`;
const API_KEY = "3434d090";

function Destaques(){
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try{
        const res =await axios.get(BASEURL);
        setMovies(res.data.results);
      } catch(error){
        console.error("error ao buscar dados", error);
      }
    };

     fetchMovies();
  },[]);

  const renderItem = ({ item }) => {
    <View style={styles.movieContainer}>
      <Image
        source={{uri: item.poster}}
        styles={styles.poster}
        />
        <Text style={styles.title}>{item.style}</Text>
    </View>
  }

  return(
    <View style={styles.container}>
    <Text style={styles.header}>Filmes em Destaque</Text>
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item, index)=> index.toString()}
    />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  movieContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  poster: {
    width: 300,
    height: 450,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Destaques;
