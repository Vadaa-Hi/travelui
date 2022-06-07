import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  Button,
} from 'react-native';
import React from 'react';

const ModalConfirmDelete = props => {
  return (
    <Modal visible={props.visible}>
      <SafeAreaView
        style={{
          flex: 1,
          //   backgroundColor: 'teal',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{alignSelf: 'center'}}>{props.item} Delete?</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'space-around',
          }}>
          <Button title="delete" onPress={props.DeleteItem} />
          <Button title="close" onPress={props.close} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalConfirmDelete;

const styles = StyleSheet.create({});
