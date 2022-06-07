import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
  Button,
  TextInput,
  Alert,
  ScrollView,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MyCoolButton} from '../Component/MyCoolButton';
import ModalConfirmDelete from '../Component/ModalConfirmDelete';

const Detail = ({navigation, props}) => {
  const [item, setItem] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const [person, setPerson] = useState([
    {name: 'Amaraa', color: '#D63031'},
    {name: 'Nar', color: '#D63031'},
    {name: 'Sar', color: '#D63031'},
  ]);
  const [num, setNum] = useState(0);
  const loginHandler = () => {
    // Alert.alert(`Tanii ${phone}`);
    setPerson(person => [...person, {name: text, color: '#FFF'}]);
  };
  const HandleClick = name => {
    setItem(name);
    setShowModal(true);
  };
  const DeleteItem = () => {
    setPerson(OldPerson => OldPerson.filter(el => el.name !== item));
    setShowModal(false);
  };
  const Increase = () => {
    setNum(num + 1);
  };
  const Decrease = () => {
    setNum(num - 1);
  };
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };
  return (
    <ImageBackground
      source={require('../images/back2.png')}
      style={{width: '100%', height: '100%'}}>
      <ModalConfirmDelete
        visible={showModal}
        close={() => setShowModal(false)}
        item={item}
        DeleteItem={DeleteItem}
      />

      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack('Home')}>
          <MaterialIcons name="arrow-back-ios" size={24} />
        </TouchableOpacity>

        <MaterialIcons
          name="menu"
          size={30}
          style={{width: 20, marginLeft: -240}}
        />
        <MaterialIcons name="account-circle" size={33} style={{}} />
      </View>
      <View
        style={{
          width: '100%',
          marginTop: 50,
          marginBottom: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.avatar}>
          <Image
            source={require('../images/p.png')}
            style={{height: 26, width: 26}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 50,
        }}>
        <Text style={{fontSize: 24, color: '#fff'}}>NYC</Text>
        <Text
          style={{
            fontSize: 20,
            color: '#a2a2db',
            paddingHorizontal: 15,
          }}>
          ------------------
        </Text>
        <Text style={{fontSize: 24, color: '#fff'}}>IDN</Text>
      </View>
      <View style={{flexDirection: 'row', paddingHorizontal: 40}}>
        <Text style={{color: '#a2a2db'}}>New York</Text>
        <Text style={{color: '#a2a2db', paddingLeft: 170}}>Indonesia</Text>
      </View>
      <Text style={{paddingHorizontal: 40, color: '#a2a2db'}}>
        20 June, 2021
      </Text>
      <Text
        style={{
          // justifyContent: 'center',
          // alignItems: 'center',
          alignSelf: 'center',
        }}>
        {num}
      </Text>
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          marginHorizontal: 60,
          justifyContent: 'space-between',
          // backgroundColor: 'red',
        }}>
        <MyCoolButton text="Increase" onPress={Increase} />
        <MyCoolButton text="Decrease" onPress={Decrease} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 50,
          marginTop: 70,
        }}>
        <Image
          source={require('../images/dots.png')}
          style={{width: 18, height: 16}}
        />
        <Image
          source={require('../images/filter.png')}
          style={{width: 20, height: 18, marginLeft: 229}}
        />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Text: {text}</Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter value"
          onChangeText={newText => setText(newText)}
        />
        <Button title="Save" onPress={loginHandler} />
      </View>
      <ScrollView style={{backgroundColor: 'green'}}>
        {person.map((el, index) => (
          <TouchableOpacity
            key={index}
            style={styles.text}
            onPress={() => HandleClick(el.name)}>
            <Text style={{}}>
              {index + 1}) {el.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>
    </ImageBackground>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 40,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#5facdb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    borderColor: '#555',
  },
  text: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
    marginTop: 10,
    width: '60%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});
