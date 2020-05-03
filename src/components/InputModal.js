import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

export const InputModal = ({modalState, handleModal, addTodo}) => {
  const [todo, setTodo] = useState('');
  const [day, setDay] = useState('today');
  return (
    <Modal visible={modalState} transparent={false} animationType="slide">
      {/* <StatusBar backgroundColor="white" barStyle="dark-content" /> */}

      <View style={styles.mainView}>
        <Text style={styles.title}>Add New</Text>
        <View>
          <TextInput
            placeholder="Enter task"
            placeholderTextColor="lightgrey"
            autoFocus={true}
            style={{
              fontSize: 48,
              borderBottomWidth: 2.5,
              borderBottomColor: 'rgba(51,51,51,0.3)',
            }}
            onChangeText={(t) => {
              setTodo(t);
            }}
            value={todo}
          />
        </View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>WHEN</Text>
          <View style={styles.dayBtnContainer}>
            <TouchableOpacity
              style={styles.dayBtn}
              onPress={() => {
                setDay('today');
              }}>
              <Text
                style={[
                  styles.dayBtnTxt,
                  {color: day == 'today' ? 'blue' : 'grey'},
                ]}>
                Today
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dayBtn}
              onPress={() => {
                setDay('tomorrow');
              }}>
              <Text
                style={[
                  styles.dayBtnTxt,
                  {color: day == 'tomorrow' ? 'blue' : 'grey'},
                ]}>
                Tomorrow
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dayBtn}
              onPress={() => {
                setDay('select');
              }}>
              <Text
                style={[
                  styles.dayBtnTxt,
                  {color: day == 'select' ? 'blue' : 'grey'},
                ]}>
                Select Date
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => {
          todo == '' ? null : addTodo(todo, false, day);
          setTodo('');
          handleModal();
        }}>
        <Text style={{fontSize: 20, color: 'white'}}>Add Task</Text>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    color: 'blue',
  },
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    padding: 15,
  },
  submitBtn: {
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 5,
  },
  dayBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayBtnContainer: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: 'rgba(200,200,200,0.1)',
    marginHorizontal: 10,
  },
  dayBtnTxt: {
    fontSize: 18,
  },
});
