import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});
// const client = ...

client
  .query({
    query: gql`
      query Query {
        books {
          title
          author
        }
      }
    `,
  })
  .then(result => console.log(result));

const StopWatch = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity onPress={() => navigation.goBack('Home')}>
          <MaterialIcons name="arrow-back-ios" size={24} />
        </TouchableOpacity>

        <Text style={styles.text}>Hio</Text>
      </View>
    </SafeAreaView>
  );
};

export default StopWatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 30,
    // color: 'white',
    textAlign: 'center',
  },
  time: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
  view: {
    paddingHorizontal: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 18,
    width: '80%',
    height: 60,
    alignSelf: 'center',
    fontSize: 20,
    backgroundColor: 'white',
    borderColor: '#555',
    padding: 10,
  },
});
