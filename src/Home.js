import React, {Component} from 'react';
import {Text, View, StatusBar, StyleSheet} from 'react-native';
import {Todo} from './components/Todo';
import {addTodo, togStatus, removeTodo} from './redux/actions';
import {connect} from 'react-redux';
import {AddBtn} from './components/AddBtn';
import {InputModal} from './components/InputModal';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {NaviTab} from './components/NaviTab';

class Home extends Component {
  state = {
    modalState: false,
    activeTab: 'today',
    delBtnState: false,
  };

  handleModal = () => {
    this.setState({
      modalState: !this.state.modalState,
    });
  };

  setActiveTab = (day) => {
    this.setState({
      activeTab: day,
    });
  };
  handleDelBtnState = () => {
    this.setState({
      delBtnState: !this.state.delBtnState,
    });
  };
  render() {
    console.log(this.props.todo);
    const {todo, addTodo, togStatus, removeTodo} = this.props;
    const {modalState, activeTab, delBtnState} = this.state;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flex: 1,
            opacity: 1,
          }}>
          <InputModal
            modalState={this.state.modalState}
            handleModal={this.handleModal}
            addTodo={addTodo}
          />
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <MIcon name="menu" size={36} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginTop: 20,
              padding: 10,
            }}>
            <Text style={styles.title}>Tasks</Text>
            <MIcon
              name="notifications-none"
              size={34}
              color="blue"
              style={{
                padding: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              //   backgroundColor: 'red',
            }}>
            <Todo
              todo={todo}
              togStatus={togStatus}
              activeTab={activeTab}
              delBtnState={delBtnState}
              handleDelBtnState={this.handleDelBtnState}
              removeTodo={removeTodo}
            />
            <NaviTab setActiveTab={this.setActiveTab} activeTab={activeTab} />
          </View>
        </View>
        <AddBtn
          handleModal={this.handleModal}
          delBtnState={delBtnState}
          handleDelBtnState={this.handleDelBtnState}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    color: 'blue',
  },
});

const mapStateToProps = (state) => ({
  todo: state.todo,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo, status, day) => {
    dispatch(addTodo(todo, status, day));
  },
  togStatus: (index, status) => {
    dispatch(togStatus(index, status));
  },
  removeTodo: (index) => {
    dispatch(removeTodo(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
