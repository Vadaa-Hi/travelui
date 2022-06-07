import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AndroidHorizontalScrollViewNativeComponent from 'react-native/Libraries/Components/ScrollView/AndroidHorizontalScrollViewNativeComponent';
const Home = ({navigation}) => {
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  return (
    <ImageBackground
      source={require('../images/back.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <MaterialIcons name="menu" size={30} style={{width: 20}} />
        <MaterialIcons
          name="account-circle"
          size={33}
          style={{}}
          onPress={() => Alert.alert('Clicked')}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.txt}>Hello</Text>
        <Text style={styles.txt1}>
          Close your eyes give me your hand darling
        </Text>
        <View style={styles.input}>
          <Image
            source={require('../images/search.png')}
            style={{height: 14, width: 14}}
          />
          <TextInput
            placeholder="Enter"
            style={{paddingHorizontal: 20, fontSize: 15, color: '#ccccef'}}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginRight: -40,
            marginTop: 30,
            // marginLeft: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 66,
              width: 66,
              borderRadius: 50,
              backgroundColor: '#5facdb',
            }}>
            <Image
              source={require('../images/p.png')}
              style={{height: 24, width: 24}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('StopWatch')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 66,
              width: 66,
              borderRadius: 50,
              backgroundColor: '#ff7bbf',
              marginLeft: 20,
            }}>
            <MaterialIcons name="apartment" color="white" size={32} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ModalCard')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 66,
              width: 66,
              borderRadius: 50,
              backgroundColor: '#ffa06c',
              marginLeft: 20,
            }}>
            <MaterialIcons name="directions-bus" color="white" size={32} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Todo')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 66,
              width: 66,
              borderRadius: 50,
              backgroundColor: '#bb32fe',
              marginLeft: 20,
            }}>
            <Entypo name="dots-three-horizontal" color="white" size={32} />
          </TouchableOpacity>
        </ScrollView>
        <Text style={{color: '#FFF', marginTop: 50, fontSize: 17}}>
          Recommended
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginRight: -40,
            marginTop: 30,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('News')}
            style={{
              backgroundColor: '#FEFEFE',
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
              marginHorizontal: 20,
            }}>
            <Image
              source={require('../images/1.jpeg')}
              style={{width: 180, borderRadius: 10, height: 130}}
            />
            <View
              style={{flexDirection: 'row', width: 150, alignItems: 'center'}}>
              <View style={{paddingHorizontal: 5, paddingVertical: 5}}>
                <Text style={{fontSize: 11, color: '#a2a2db'}}>
                  to suggest that someone or something would be good or suitable
                </Text>
              </View>
              <MaterialCommunityIcons
                name="map-marker"
                size={25}
                color="#ff5c83"
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: '#FEFEFE',
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
              //   marginHorizontal: 20,
            }}>
            <Image
              source={require('../images/2.jpeg')}
              style={{width: 180, borderRadius: 10, height: 130}}
            />
            <View
              style={{flexDirection: 'row', width: 150, alignItems: 'center'}}>
              <View style={{paddingHorizontal: 5, paddingVertical: 5}}>
                <Text style={{fontSize: 11, color: '#a2a2db'}}>
                  to suggest that someone or something would be good or suitable
                </Text>
              </View>
              <MaterialCommunityIcons
                name="map-marker"
                size={25}
                color="#ff5c83"
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FEFEFE',
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
              marginHorizontal: 20,
            }}>
            <Image
              source={require('../images/3.jpeg')}
              style={{width: 180, borderRadius: 10, height: 130}}
            />
            <View
              style={{flexDirection: 'row', width: 150, alignItems: 'center'}}>
              <View style={{paddingHorizontal: 5, paddingVertical: 5}}>
                <Text style={{fontSize: 11, color: '#a2a2db'}}>
                  to suggest that someone or something would be good or suitable
                </Text>
              </View>
              <MaterialCommunityIcons
                name="map-marker"
                size={25}
                color="#ff5c83"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 40,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    paddingHorizontal: 40,
    marginTop: 25,
  },
  txt: {
    fontSize: 40,
    color: '#522289',
    fontWeight: 'bold',
  },
  txt1: {
    fontSize: 15,
    color: '#a2a2db',
    paddingVertical: 10,
    paddingRight: 80,
    lineHeight: 22,
    fontWeight: '400',
    // fontFamily:
  },
  input: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 40,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
  },
});
