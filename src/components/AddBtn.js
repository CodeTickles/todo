import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;
import MIcon from 'react-native-vector-icons/MaterialIcons';

export const AddBtn = ({handleModal, delBtnState, handleDelBtnState}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: windowHeight - 120,
        right: 0,
      }}>
      <TouchableOpacity
        style={[styles.addBtn, {backgroundColor: delBtnState ? 'red' : 'blue'}]}
        onPress={() => {
          delBtnState ? handleDelBtnState() : handleModal();
        }}>
        <View
          style={{
            height: 48,
            width: 48,
            backgroundColor: delBtnState ? 'red' : 'rgba(0,0,0,0.2)',
            borderRadius: 48 / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MIcon
            name={delBtnState ? 'delete' : 'add'}
            size={34}
            color="white"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    height: 100,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 60,
  },
});
