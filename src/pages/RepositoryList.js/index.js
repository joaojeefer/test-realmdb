import React, {useState, useEffect, useCallback} from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RepositoryItem } from "../../components";
import styles from './style';

function RepositoryList() {
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Repositórios</Text>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          onSubmitEditing={() => {}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite o repositório..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon name="add" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}>
          <Icon name="delete" size={22} color="#b3131b" />
        </TouchableOpacity>
      </View>
      <FlatList
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        data={[]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(props) => <RepositoryItem data={props.item} />}
      />
    </View>
  );
}

export default RepositoryList;
