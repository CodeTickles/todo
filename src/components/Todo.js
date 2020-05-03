import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';

export const Todo = ({
  todo,
  togStatus,
  activeTab,
  delBtnState,
  handleDelBtnState,
  removeTodo,
}) => {
  return (
    <View style={styles.todoContainer}>
      <FlatList
        data={todo}
        keyExtractor={(item) => item.todo}
        renderItem={({item, index}) => {
          if (activeTab == item.day) {
            return (
              <Item
                item={item}
                togStatus={togStatus}
                index={index}
                delBtnState={delBtnState}
                handleDelBtnState={handleDelBtnState}
                removeTodo={removeTodo}
              />
            );
          } else {
            return null;
          }
        }}
      />
    </View>
  );
};

const Item = ({
  item,
  index,
  togStatus,
  delBtnState,
  handleDelBtnState,
  removeTodo,
}) => {
  return (
    <TouchableOpacity
      onLongPress={() => {
        handleDelBtnState();
      }}
      onPress={() => {
        togStatus(index, !item.status);
      }}>
      <View style={styles.itemContainer}>
        <Text
          style={{
            fontSize: 26,
            textDecorationLine: item.status ? 'line-through' : 'none',
            color: item.status ? 'lightgrey' : 'black',
          }}>
          {item.todo}
        </Text>
        {delBtnState == true && (
          <TouchableOpacity
            style={styles.delBtn}
            onPress={() => {
              removeTodo(index);
            }}>
            <MIcon name="close" size={26} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 60,
    flex: 1,
    backgroundColor: 'rgba(150,150,150,0.1)',
    padding: 20,
    marginTop: 120,
  },
  delBtn: {
    // backgroundColor: 'red',
    padding: 5,
    // paddingHorizontal: 5,
  },
  itemContainer: {
    height: 40,
    marginVertical: 5,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
});
