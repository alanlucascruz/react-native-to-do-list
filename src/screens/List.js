import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import {useDispatch, useSelector} from 'react-redux';
import {
  addItem,
  deleteItem,
  toggleCompleted,
} from '../store/reducers/listSlice';

export default () => {
  const [item, setItem] = useState('');

  const {list} = useSelector(state => state);

  const dispatch = useDispatch();

  const onSubmitItem = () => {
    if (item) {
      dispatch(addItem(item));
      setItem('');
    }
  };

  const CheckBox = ({item}) => {
    const {id, completed} = item;

    let iconName = 'check-box-outline-blank';

    if (completed) iconName = 'check-box';

    return (
      <TouchableOpacity
        onPress={() => dispatch(toggleCompleted(id))}
        activeOpacity={0.6}>
        <MIcon name={iconName} size={24} color="#003491" />
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    const {id, description} = item;

    return (
      <View style={styles.listItem}>
        <CheckBox item={item} />

        {/* <Switch
          trackColor={{false: '#d2d2d2', true: '#3976e3'}}
          thumbColor={!completed ? '#b2b2b2' : '#003491'}
          onValueChange={() => dispatch(toggleCompleted(id))}
          value={completed}
        /> */}

        <Text style={styles.listText}>{description}</Text>

        <TouchableOpacity
          style={styles.listDeleteButton}
          onPress={() => dispatch(deleteItem(id))}
          hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
          <MIcon name="delete" color="#ff6542" size={24} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>To Do List</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInputTask}
          placeholder="Adicione uma tarefa"
          placeholderTextColor={'#a3a3a3'}
          onChangeText={setItem}
          value={item}
          returnKeyType="done"
          onSubmitEditing={onSubmitItem}
        />
        <TouchableOpacity
          style={styles.submitButton}
          activeOpacity={0.7}
          onPress={onSubmitItem}>
          <MIcon name="add" color="#003491" size={32} />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  headerContainer: {
    backgroundColor: '#003491',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 21,
    fontWeight: '700',
  },
  textInputContainer: {
    flexDirection: 'row',
    backgroundColor: '#003491',
    padding: 16,
    borderBottomRightRadius: 28,
  },
  textInputTask: {
    flex: 1,
    color: '#505050',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    marginRight: 16,
    borderRadius: 16,
    height: 48,
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  list: {
    paddingTop: 16,
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  listText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 16,
    color: '#505050',
  },
  listDeleteButton: {
    marginLeft: 16,
  },
});
