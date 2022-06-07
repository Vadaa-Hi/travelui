import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, {useRef} from 'react';
import NewsCard from '../Component/NewsCard';
import newAPI from '../api/news';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const News = ({navigation}) => {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);

    // inputRef.current.value = '';
  };
  return (
    <SafeAreaView>
      <View style={{marginLeft: 20}}>
        <TouchableOpacity onPress={() => navigation.goBack('Home')}>
          <MaterialIcons name="arrow-back-ios" size={24} />
        </TouchableOpacity>
      </View>
      <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>
        News
      </Text>
      <NewsCard />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          margin: 5,
        }}>
        Text
      </Text>
      <View style={{flexDirection: 'row', marginLeft: 25}}>
        <TextInput style={styles.input} placeholder="Ex..." ref={inputRef} />
        <Button title="Change Name" onPress={onClick} />
      </View>
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 50,
    // textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    borderColor: '#555',
    paddingLeft: 10,
  },
});
