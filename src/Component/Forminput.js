import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Forminput = ({placeholder, title}) => {
  return (
    <>
      <Text style={{fontWeight: 'bold'}}>{title}</Text>
      <TextInput placeholder={placeholder} style={styles.input} />
    </>
  );
};

export default Forminput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#1b1b33',
    height: 35, //35
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
});
