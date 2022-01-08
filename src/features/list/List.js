import React, { useState } from 'react';
import {
  Appearance,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, toggleCompleted } from './listSlice';
import MIcon from "react-native-vector-icons/MaterialIcons";

const colorScheme = Appearance.getColorScheme();

export default () => {
  const list = useSelector(state => state.list);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    const { id, description, completed } = item;

    return (
      <View style={styles.listItem}>
        <Text style={styles.listText}>{description}</Text>

        <View style={styles.listButtons}>
          <Switch
            trackColor={{ false: "#c1c1c1", true: "#ad75fa" }}
            thumbColor={!completed ? "#858585" : "#6A00FF"}
            onValueChange={() => dispatch(toggleCompleted(id))}
            value={completed}
          />
          <TouchableOpacity onPress={() => dispatch(deleteItem(id))} style={{ marginLeft: 8 }} hitSlop={{ top: 6, right: 6, bottom: 6, left: 6 }}>
            <MIcon name={"delete"} size={28} color="#FF2A00" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const onPressButton = () => {
    if (description) {
      dispatch(addItem(description));
      setDescription("");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma tarefa"
          onChangeText={setDescription}
          value={description}
          returnKeyType="done"
          onSubmitEditing={onPressButton}
        />

        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          <Text style={styles.buttonIcon}>+</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    flexDirection: "row",
    padding: 16,
    marginBottom: 4
  },
  input: {
    flex: 1,
    backgroundColor: colorScheme === "light" ? "#d3d3d3" : "#555555",
    borderRadius: 4,
    fontSize: 16,
    marginRight: 56,
  },
  button: {
    position: "absolute",
    right: 8,
    top: 13,
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#6A00FF",
    elevation: 8
  },
  buttonIcon: {
    color: "#ffffff",
    fontSize: 42,
    fontWeight: "600",
    top: -2
  },
  list: {
    padding: 16
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    marginBottom: 8
  },
  listText: {
    fontSize: 16,
    fontWeight: "700"
  },
  listButtons: {
    flexDirection: "row"
  }
});