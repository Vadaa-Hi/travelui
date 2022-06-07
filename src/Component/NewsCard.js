import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

const NewsCard = () => {
  function renderText(style, text) {
    return <Text style={style}>{text}</Text>;
  }
  return (
    <View style={styles.cardView}>
      <Text style={styles.title}>Apple discontinues its last iPod</Text>
      <Text style={styles.author}>Jon Fingas</Text>
      <Image style={styles.img} source={require('../images/1.jpeg')} />
      <Text style={styles.desc}>
        Apple just marked the end to one of the most important product lines in
        its history. The company has discontinued the iPod touch, which will
        only be available in stores \"while supplies last.\" Not surprisingly,
        the company maintained that the \"spirit of iPod\
      </Text>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  title: {
    width: width,
    marginHorizontal: width * 0.1,
    marginVertical: width * 0.03,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  author: {
    // marginVertical: height * 0.1,
    marginBottom: width * 0.05,
    marginHorizontal: width * 0.1,
    fontSize: 15,
    color: 'gray',
  },
  img: {
    width: width * 0.8,
    height: height / 6,
    marginLeft: width * 0.1,
    marginRight: width * 0.05,
    marginVertical: height * 0.01,
  },
  desc: {
    width: width,
    marginVertical: width * 0.05,
    // marginHorizontal: width * 0.02,
    paddingHorizontal: width * 0.1,
    color: 'gray',
    fontSize: 18,
    textAlign: 'justify',
  },
});
